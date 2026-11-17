class Program[kernel] {
    Console = kernel.Console;

    class Checker {
        pub inspect(name) { "Checked: ".concat(name) }
    }

    class Notebook {
        var entries = 0;
        pub record(text) {
            entries = entries.plus(1);
            "Note ".concat(entries.toString).concat(": ").concat(text)
        }
    }

    class ReviewDesk[checker, notebook] {
        checks = checker;
        notes = notebook;
        pub review(name) { notes.record(checks.inspect(name)) }
    }

    pub run {
        let notebook = Notebook();
        let desk = ReviewDesk(Checker(), notebook);
        Console.printLine(desk.review("Bridge model"));
        Console.printLine(desk.review("Station model"));
        let friendlyChecker = { pub inspect(name) { "Ready to discuss: ".concat(name) } };
        let friendlyDesk = ReviewDesk(friendlyChecker, notebook);
        Console.printLine(friendlyDesk.review("Garden model"))
    }
}
