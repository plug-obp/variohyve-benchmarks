# From starter to your own world

The first eight lessons use a ready-made JavaHostKernel. A recipe lets you choose
the capabilities your application receives. You still write ordinary modules,
construct objects and send messages; the recipe owns the wiring.

Download the packaging archive for this tutorial version from the preview's
download page, or install its matching VSIX. Java 23+ is required. Extracting an
archive does not require a checkout, Gradle or GitHub credentials.

## Start a project

In VS Code run **VarioHyve: New Recipe Project** in a trusted workspace. Choose a
new folder. From the command line, copy the installation's `examples/project`
folder to a writable location instead. Set `VH` to the extracted tools and
`PROJECT` to that copy:

```sh
export JAVA_HOME=/path/to/jdk-23
export PATH="$JAVA_HOME/bin:$PATH"
VH=/path/to/extracted/vh-packaging
PROJECT=/path/to/my-project
cp -R "$VH/examples/project" "$PROJECT"
"$VH/bin/vh-world" "$VH" "$PROJECT/Main.vh.launch.json" --test
"$VH/bin/vh-world" "$VH" "$PROJECT/Main.vh.launch.json"
```

Use absolute paths; on Windows use the `.bat` launchers and your shell's copy
command. The test prints `PASS`. Enter `Answer` during the run and it prints
`Answer: 42`. End of input prints `42`.

The project includes the native multiplier package, the SUnit library and the
packaged console and value adapter. Keep those folders when editing the six files
below. Each download replaces the corresponding file in your project; the
individual source downloads do not include the supporting libraries or JARs.

## Write the application

`Main.vh` receives a multiplier and sends it `multiply(14)`. It has no ambient
kernel, console or filesystem, and does not choose how its multiplier is built.

<!-- example-file: projects/recipe-project/Main.vh -->
```vh
// The application receives its dependency; it does not select a host kernel.
class Main(multiplier) {
    multiplier = multiplier;
    answer { multiplier.multiply(14) }
}
```

[Download Main.vh](projects/recipe-project/Main.vh)

## Wire its world

`World.vh` constructs the [native multiplier](10-native-packages.md) with factor
3 and passes it into the application. It loads a console realizer, then supplies
the explicitly granted input and output streams. Sending `run` reads a line and
prints the application's answer. Sending `test` constructs the development suite;
ordinary runs do not import those test dependencies.

<!-- example-file: projects/recipe-project/World.vh -->
```vh
{
    multiplier = importModule(files.resolve("packages/multiplier/Multiplier.vh"), 3);
    application = importModule(files.resolve("Main.vh"), multiplier);
    makeConsole = loadAlien("aliens/console");
    console = makeConsole(provisions.input, provisions.output);
    run {
        var line = console.readLine;
        null.equals(line).ifTrue(fun { console.printLine(application.answer.toString) },
            fun { console.printLine(line.concat(": ").concat(application.answer.toString)) })
    }
    // Development dependencies are constructed only for this explicit entry.
    test {
        var suiteKernel = importModule(files.resolve("lib/SuiteKernel.vh"));
        var testing = importModule(files.resolve("lib/SUnit.vh"), suiteKernel);
        var tests = importModule(files.resolve("Tests.vh"), application, testing);
        var runner = importModule(files.resolve("SuiteReporter.vh"), console, true);
        runner.run(tests.tests)
    }
}
```

[Download World.vh](projects/recipe-project/World.vh)

The recipe receives bounded file access, module importing and Alien loading
capabilities. The application receives only the multiplier selected by that
recipe.

## Check the result

`Tests.vh` builds one SUnit case. The test receives the same application instance
that the world's `run` method uses, along with the testing capability.

<!-- example-file: projects/recipe-project/Tests.vh -->
```vh
class Tests(application, testing) {
    application = application;
    testing = testing;
    tests {
        var suite = testing.suite("My application");
        suite.add("supplied multiplier", fun(assert) { assert.assertEquals(42, application.answer) });
        suite
    }
}
```

[Download Tests.vh](projects/recipe-project/Tests.vh)

`SuiteReporter.vh` runs the cases, prints assertion failures through its console
input and returns whether the suite passed. Its recursion visits each case and
each recorded failure; reporting is ordinary VarioHyve code too.

<!-- example-file: projects/recipe-project/SuiteReporter.vh -->
```vh
// Reporting is native policy. A raised failure aborts; assertions return a Boolean.
class SuiteReporter(console, trueValue) {
    console = console;
    success = trueValue;
    run(suite) { runAt(suite, 0) }
    runAt(suite, index) {
        index.lessThan(suite.count).ifTrue(fun {
            var test = suite.caseAt(index);
            var assertions = test.run;
            report(test.name, assertions, 0);
            var passed = assertions.failureCount.equals(0);
            passed.and(runAt(suite, index.plus(1)))
        }, fun { success })
    }
    report(name, assertions, index) {
        index.lessThan(assertions.failureCount).ifTrue(fun {
            console.printLine(name.concat(": ").concat(assertions.failureAt(index)));
            report(name, assertions, index.plus(1))
        })
    }
}
```

[Download SuiteReporter.vh](projects/recipe-project/SuiteReporter.vh)

Change the expected answer in `Tests.vh` from 42 to 41 and run **Test File** on
`Main.vh`, or repeat the command ending in `--test`. You will see the case name
and `Expected 41 but got 42`, followed by `FAIL` and exit status 1. Restore 42.
Assertions return a Boolean; a raised execution failure aborts this native suite.
The earlier starter `vh test` runner has its own richer per-case recovery contract.

## Connect the editor and command line

`Main.vh.launch.json` tells both tools to realize `World.vh` and send `run`, or
`test` for a test launch. Its `packaging` section selects the native policy and
its `build` message. Paths are relative to this sidecar; `alienRoot` selects the
project's own packaged providers.

<!-- example-file: projects/recipe-project/Main.vh.launch.json -->
```json
{
  "format": "variohyve-launch-1",
  "root": ".",
  "recipe": "World.vh",
  "selector": "run",
  "arguments": [],
  "startup": {
    "valueAdapter": "aliens/starter-values",
    "profile": "host-values",
    "provisioning": "stdio",
    "result": "discard"
  },
  "test": {
    "selector": "test",
    "arguments": []
  },
  "packaging": {
    "policy": "Package.vh",
    "selector": "build"
  },
  "alienRoot": "."
}
```

[Download Main.vh.launch.json](projects/recipe-project/Main.vh.launch.json)

The startup value adapter supplies the selected scalar protocols; changing that
adapter can change which messages integers and strings understand. The
[`.variohyve-project` marker](projects/recipe-project/.variohyve-project) keeps
editor assistance conservative throughout the project, including imported
modules. It does not run or alter the recipe.

## Declare the deployment

`Package.vh` lists the production sources and Alien packages, captures their
bytes and selects the deployed `run` entry. The runtime ingredient comes from
the installed tools. The tests and their runner are deliberately absent from
this inventory because only the development `test` entry imports them.

<!-- example-file: projects/recipe-project/Package.vh -->
```vh
// This ordinary native module owns the deployment inventory and launch policy.
class Package(sources, tools, importModule, output) {
    sources = sources;
    tools = tools;
    output = output;
    runtimeSource = tools.capture("native/RuntimeIngredients.vh");
    runtime = importModule(tools.source(runtimeSource), tools, output);
    source(path) { output.source(path, sources.capture(path)) }
    build {
        output.runtime("native/RuntimeIngredients.vh", runtimeSource);
        runtime.write;
        source("Main.vh");
        source("World.vh");
        source("packages/multiplier/Multiplier.vh");
        output.alien("aliens/starter-values", sources.alien("aliens/starter-values"));
        output.alien("aliens/console", sources.alien("aliens/console"));
        output.startup("aliens/starter-values", "host-values", "stdio", "discard");
        output.launch("World.vh", "run");
        output.finish()
    }
}
```

[Download Package.vh](projects/recipe-project/Package.vh)

Use **Run File**, **Package Application**, then **Run Deployment** in VS Code.
The equivalent packaging and deployment commands are:

```sh
"$VH/bin/vh-package" "$VH" --launch "$PROJECT/Main.vh.launch.json" /path/to/new-application
/path/to/new-application/bin/vh-deployed /path/to/new-application
```

The destination must be new. Move the resulting folder to another Java 23+
machine and run it there. It contains the runtime and pinned production
dependencies. Original sources and tools are no longer required.

Each declared file is checked against its SHA-256 digest. Merely placing a file
next to the package does not make it a dependency. Update the native policy when
adding an import. Development launch configuration and deployment policy may
deliberately choose different entries, but must agree on the capabilities each
entry requires.

Long computations can declare `execution: {"maxSteps": 1000000}` in the launch
JSON and `output.execution(1000000)` in the native policy. The default is 100000
steps per independent VM entry. Imports and callbacks share the remaining budget
of their active entry; neither resets it.

Next: [Publish and consume a tiny native package](10-native-packages.md) ·
[Back to the lessons](README.md).
