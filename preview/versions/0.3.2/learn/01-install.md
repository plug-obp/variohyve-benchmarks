# Install and say hello

You need a Java 23 JDK and a matching VarioHyve starter archive and VS Code
extension (`.vsix`). Get both from the
[matching public release downloads](https://obpcdl.org/variohyve-benchmarks/preview/versions/0.3.2/).
If you are building them yourself, follow the contributor commands below first.

Extract the starter archive into a folder of your choice. It contains `bin`,
`lib`, `contracts` and `learn`. Check your Java installation:

```sh
java -version
javac -version
```

Make sure both commands select Java 23. Set `JAVA_HOME` to that JDK and put its
`bin` directory first on your `PATH` if another Java installation is the default.
The launcher reads `JAVA_HOME`; the later Java lessons also need `java` and
`javac` on `PATH`. In a terminal, change into the extracted starter's `learn`
directory and run:

```sh
../bin/vh run examples/hello.vh
```

On Windows PowerShell, the corresponding command is:

```powershell
..\bin\vh.bat run examples\hello.vh
```

You should see:

```text
Hello, VarioHyve!
```

That is your first program. Open [hello.vh](examples/hello.vh):

<!-- example: hello.vh -->
```vh
class Program(kernel) {
    Console = kernel.Console;

    run {
        Console.printLine("Hello, VarioHyve!")
    }
}
```

[Download hello.vh](examples/hello.vh)

The launcher supplies `kernel`, our bundle of tools. The program retains its
`Console` in a slot. Sending `run` prints the message. Change the text, save
the file and run it again.

The remaining terminal examples start in `learn`. On Windows use
`..\bin\vh.bat` wherever a command shows `../bin/vh`. Quote file paths
containing spaces. You can also put the starter's `bin` directory on your PATH
and use `vh` from any directory.

## Use VS Code

1. Open VS Code's Extensions view, choose **Install from VSIX...**, and select
   the matching `vh-lsp-vscode-0.4.0.vsix` artifact.
2. Open the starter's `learn` folder and trust it when you want to run its code.
3. If Java is not found, set **Vh: Java Home** (`vh.javaHome`) to the JDK folder.
4. Open `examples/hello.vh`. In the Command Palette select
   **VarioHyve: Run File**.

Run saves the active file first. An unnamed file needs a saved `.vh` path;
canceling Save As cancels the run. Input and output appear in the VarioHyve
terminal. Later, choose **VarioHyve: Test File** for a test module.
**VarioHyve: Stop Program** stops a running program, including one waiting for
console input. Opening or editing a file does not execute it.

You can also create an untitled document and choose **VarioHyve** as its language
mode to get diagnostics and API help before saving. The status item reports
whether assistance is restricted, starting, analyzing, complete or unavailable.
**VH: analyzed** means source checks completed for the current text; it does not
promise that every dynamic message will succeed when run.

Syntax mistakes appear in Problems. Try removing a closing brace and putting
it back. Runtime failures also appear there when the run still matches the
current source; editing clears the previous runtime markers. The terminal
retains the report so you can compare it with your change.

Try completion after `2.` or `"hello".`. Hover and signatures explain supported
kernel messages, and definition navigation opens their API declaration. The
extension deliberately offers modest help for dynamic objects whose behavior
cannot be determined from the current source.

If language services need restarting, select
**VarioHyve: Restart Language Server**. A Java startup error includes guidance
on the required version and `vh.javaHome`.

## Building the artifacts from source

This section is for contributors. Running the extracted lessons only needs
Java; it does not need Gradle, Node or repository credentials.

From the repository root, with the documented build prerequisites:

```sh
./gradlew :vh-host:installDist :vh-host:distZip :vh-lsp:installDist
npm --prefix vh-lsp-vscode ci
npm --prefix vh-lsp-vscode run bundle-server
npm --prefix vh-lsp-vscode run package
```

The installed starter is `vh-host/build/install/vh-host`; archives are in
`vh-host/build/distributions`. The VSIX is written to `vh-lsp-vscode`.
For a source checkout you can run the same first example with:

```sh
vh-host/build/install/vh-host/bin/vh run "docs/Learn VarioHyve/examples/hello.vh"
```

The repository starter contract records packaging prerequisites and current
platform validation. A generated Windows launcher is provided; availability of
that file alone is not evidence of a Windows smoke test.

[Next: Values, messages and input](02-values-and-input.md)

For an application with explicit native dependencies and a portable deployment,
use the [packaging distribution or the bundled VS Code tools](../../vh-packaging/GETTING-STARTED.md).
The public release downloads include `variohyve-packaging-*.zip` alongside the
starter archive and VSIX. The packaging guide covers creating a project, native
tests, packaging and running the output without the original installation.
