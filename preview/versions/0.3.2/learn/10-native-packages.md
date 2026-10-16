# Publish and consume a tiny native package

A native package can be a folder containing an entry module and a short contract.
It needs no registry or package-manager syntax. Our complete `Multiplier.vh`
receives its factor at construction and exposes one method, `multiply(value)`:

<!-- example-file: packages/multiplier/Multiplier.vh -->
```vh
// Entry module of an independently authored native package.
class Multiplier(factor) {
    factor = factor;
    multiply(value) { value.times(factor) }
}
```

[Download Multiplier.vh](packages/multiplier/Multiplier.vh)

Put a `README.md` beside the module so consumers know its entry, inputs and
protocol. This is the complete contract distributed with our tiny package:

<!-- example-file: packages/multiplier/README.md -->
```markdown
# Tiny native multiplier package

Entry: `Multiplier.vh`. Construction requires one integer `factor`; the resulting
object implements `multiply(value)`. It needs the selected startup value adapter's
integer `times/1` protocol, and no filesystem, console or other capabilities.

Copy this folder into a consumer's `packages/multiplier` directory. Its native
recipe constructs the module with `importModule(files.resolve(
"packages/multiplier/Multiplier.vh"), 3)` and supplies the result to its application.
Its native packaging policy captures that same entry file explicitly. There is
no registry, package-name lookup or implicit dependency discovery.

The extracted-archive journey copies this independent producer folder into a
fresh consumer. The custom Alien journey substitutes a packaged Java provider
implementing the same `multiply/1` protocol without changing application or tests.
```

[Download README.md](packages/multiplier/README.md)

The integer `times/1` behavior comes from the chosen startup value adapter. No
console, filesystem or kernel is supplied to the multiplier.

## Publish the folder, then consume it

Save the two downloads together in a folder named `multiplier`, then copy or
archive that folder. The tools archive also ships this independent producer as
`examples/native-package`. A consumer copies the folder to `packages/multiplier`
inside its own source root. Use the project from the
[previous chapter](09-worlds.md); it already contains this wiring and a copy of
the package.

In its recipe, `importModule(files.resolve("packages/multiplier/Multiplier.vh"),
3)` constructs the dependency. The recipe passes that object into `Main.vh`.
The application sends `multiply(14)` and gets 42. It knows the protocol, not the
file path or how the dependency was built.

In `Package.vh`, `source("packages/multiplier/Multiplier.vh")` declares the entry
in the production inventory. Packaging captures its bytes and pins its digest.
Run the tests, package the project and move the deployment elsewhere as before.
The producer folder can be deleted: the consumer owns its copy and the deployment
owns its captured bytes. Our extracted-archive check performs exactly that copy,
then deletes both source project and producing tools before the final run.

For a package with several modules, document their inputs and declare each needed
file in the consuming native policy. Directory names are distribution conventions;
they do not add global names or implicit imports to VarioHyve.

## Substitute an Alien without changing the application

Follow [Bring your own Alien package](../../vh-packaging/CUSTOM-ALIENS.md#build-a-provider)
to compile the Java multiplier, package its separate dependency JAR and write
`aliens/multiplier/alien.json` with their actual digests. That guide is also
included as `CUSTOM-ALIENS.md` in the tools archive. The provider implements the
same `multiply/1` protocol as our native package.

Once that provider folder is ready, replace your project's `World.vh` with this
complete alternative. Loading returns a callable realizer; calling it with 3
constructs the multiplier. Application construction, console wiring and tests
remain the same.

<!-- example-file: projects/alien-project/World.vh -->
```vh
{
    makeMultiplier = loadAlien("aliens/multiplier"); multiplier = makeMultiplier(3);
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

[Download World.vh](projects/alien-project/World.vh)

Replace `Package.vh` with this complete policy too. It declares the Alien folder
in place of the native multiplier source, so the provider and its dependency
JAR are captured in the deployment.

<!-- example-file: projects/alien-project/Package.vh -->
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
        output.alien("aliens/starter-values", sources.alien("aliens/starter-values"));
        output.alien("aliens/console", sources.alien("aliens/console"));
        output.alien("aliens/multiplier", sources.alien("aliens/multiplier"));
        output.startup("aliens/starter-values", "host-values", "stdio", "discard");
        output.launch("World.vh", "run");
        output.finish()
    }
}
```

[Download Package.vh](projects/alien-project/Package.vh)

Keep `Main.vh`, `Tests.vh`, `SuiteReporter.vh` and `Main.vh.launch.json` unchanged.
Run, test and deploy again through the CLI or VS Code, using the commands from
the previous chapter and a new deployment destination. Each launch opens a fresh
provider session; editing Java source alone does not rebuild its JAR or update
the manifest's digest.

The loader validates the package manifest, boundary version and JAR digests.
Neither a built-in provider registration nor a repository checkout is needed.
The host code is necessary here only to adapt the foreign library to the Alien
boundary; composition and packaging policy remain native.

Back to [Learn VarioHyve](README.md).
