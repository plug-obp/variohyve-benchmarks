# Test collaborating objects

You can test a whole conversation between objects, including what one object
asks another to save. Start with [basic tests](06-testing.md) and run the
[review desk](11-composition.md) first. This lesson uses the same starter.

The review desk accepts a checker and a notebook. That gives us a useful choice:
use the ordinary notebook to check numbering, or supply a small recording
notebook to see exactly what the desk sends to it.

## Give the test something to observe

`RecordingNotebook` answers the same `record(text)` message as `Notebook`.
It saves the latest text, counts the calls and returns `"Saved"`. Its `lastEntry`
and `count` methods let a test check those effects. Such a small stand-in is
often called a **test double**.

The complete file below includes the same `Checker`, `Notebook` and `ReviewDesk`
classes as the previous lesson, plus the recorder and three tests. This is a
standalone exercise: it does not load `federation.vh`. If you change a shared
class while experimenting, make the same edit in both files.

<!-- example-file: examples/tests/review-desk.vh -->
```vh
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
```

[Download review-desk.vh](examples/tests/review-desk.vh)

## Run it

Save [review-desk.vh](examples/tests/review-desk.vh) in `examples/tests`, then
run it from the starter's `learn` directory:

```sh
../bin/vh test examples/tests/review-desk.vh
```

On Windows PowerShell:

```powershell
..\bin\vh.bat test examples\tests\review-desk.vh
```

```text
Suite: Review desk tests
PASS two desks share numbering
PASS records one checked result
PASS records a replacement checker's result
Tests: 3, passed: 3, failed: 0, errors: 0
```

The first test checks two real desks sharing one real notebook. The next test
checks three separate promises: the desk returns the notebook's answer, passes
it the checked text, and records exactly once. The final test checks that a
different checker's wording reaches the notebook too.

Each test creates fresh objects. The assertions compare text and numbers that
we can observe through public methods. The desk needs no changes to work with
the recorder: both notebooks answer the message it already uses.

## Make it yours

In `records one checked result`, after the existing assertions, review
`"Station model"` using the same desk. Add assertions that its result is
`"Saved"`, `notebook.lastEntry` is `"Checked: Station model"` and
`notebook.count` is `2`. Separate the added statements with semicolons.
The report should still show three passing tests: you added checks to an
existing case.

This catches a useful mistake: recording the first result twice instead of
recording each new review once. You now have a way to check both an answer and
the work a component asks its collaborators to do.

## Your next project

You can organize calculations, keep related data together, select and summarize
it, customize a report, and test components together. Try applying that sequence
to a book list or a supply cupboard of your own.

For an external collaborator, continue to the Java capability lesson. To move
shared code into separate source files, the [worlds lesson](15-worlds.md) shows
an application assembled from explicit inputs.

[Try next: Add a capability written in Java](13-java-capability.md)

[Next: Choose your next learning path](README.md)
