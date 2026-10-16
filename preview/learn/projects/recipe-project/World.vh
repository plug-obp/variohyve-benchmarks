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
