class Tests[kernel, testing] {
    Testing = testing;

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

    class RecordingNotebook {
        var savedText = "";
        var entries = 0;
        pub lastEntry { savedText }
        pub count { entries }

        pub record(text) {
            savedText = text;
            entries = entries.plus(1);
            "Saved"
        }
    }

    pub tests {
        let suite = Testing.suite("Review desk tests");
        suite.add("two desks share numbering", fun(assert) {
            let notebook = Notebook();
            let firstDesk = ReviewDesk(Checker(), notebook);
            let secondDesk = ReviewDesk(Checker(), notebook);
            assert.assertEquals("Note 1: Checked: Bridge model", firstDesk.review("Bridge model"));
            assert.assertEquals("Note 2: Checked: Station model", secondDesk.review("Station model"))
        });
        suite.add("records one checked result", fun(assert) {
            let notebook = RecordingNotebook();
            let desk = ReviewDesk(Checker(), notebook);
            assert.assertEquals("Saved", desk.review("Bridge model"));
            assert.assertEquals("Checked: Bridge model", notebook.lastEntry);
            assert.assertEquals(1, notebook.count)
        });
        suite.add("records a replacement checker's result", fun(assert) {
            let notebook = RecordingNotebook();
            let friendlyChecker = { pub inspect(name) { "Ready to discuss: ".concat(name) } };
            let desk = ReviewDesk(friendlyChecker, notebook);
            assert.assertEquals("Saved", desk.review("Garden model"));
            assert.assertEquals("Ready to discuss: Garden model", notebook.lastEntry);
            assert.assertEquals(1, notebook.count)
        });
        suite
    }
}
