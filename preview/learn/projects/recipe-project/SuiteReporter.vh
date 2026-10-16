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
