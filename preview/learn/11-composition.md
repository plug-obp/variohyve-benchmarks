# Bring components together

You can now write objects, give them state, test them and package an application.
Let's use those skills to build a tiny **review desk**: one component checks a
model's name, and another keeps a numbered notebook of the results.

This is a small taste of VarioHyve's purpose: bring useful components together
while letting each keep its own job. You decide what the application receives.

## Three small jobs

- `Checker` supplies an `inspect(name)` message. Our first version produces a
  friendly line of text; it is a demonstration, not a real model checker.
- `Notebook` owns its entry counter and supplies `record(text)`.
- `ReviewDesk` receives both objects and connects their messages.

The desk doesn't create its own checker or notebook. That simple choice makes
it easy to try a different checker or share a notebook.

<!-- example-file: examples/federation.vh -->
```vh
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
```

[Download federation.vh](examples/federation.vh)

## Run it

From the starter's `learn` directory:

```sh
../bin/vh run examples/federation.vh
```

On Windows PowerShell:

```powershell
..\bin\vh.bat run examples\federation.vh
```

Or open the file in VS Code and choose **VarioHyve: Run File**.

```text
Note 1: Checked: Bridge model
Note 2: Checked: Station model
Note 3: Ready to discuss: Garden model
```

The last review uses a new checker. `ReviewDesk` is unchanged: it still sends
`inspect` and `record`. Both desks receive the same notebook, so its numbering
continues. The checker chooses the wording; the notebook owns the counter; the
desk chooses how the work flows between them.

## Make it yours

Try changing the friendly checker's message, adding a fourth review, or giving
the second desk a new `Notebook()`. Predict the output, then run the program.
You already have the pieces to make these choices yourself.

When you are ready to connect a real external tool, [lesson 7](07-java-capability.md)
shows how a Java capability answers an ordinary VarioHyve message.
[Lessons 9](09-worlds.md) and [10](10-native-packages.md) take that idea into a
recipe: the same application can receive a native package or a Java provider,
then carry its chosen ingredients in a deployment.

That is the next step from this small desk to your own application. Start with
one useful protocol, supply the components explicitly, and keep each component's
responsibility clear.
