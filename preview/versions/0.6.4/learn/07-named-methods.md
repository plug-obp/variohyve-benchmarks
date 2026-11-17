# Give each step a name

After [Test your program](06-testing.md), keep building with the same starter.
This lesson makes a small receipt for a community shop. You will give repeated
work a name so the calculation, wording and printing are easy to change.
Prices are whole credits in this example: a notebook costs four credits and a
pencil costs one.

## Run it

Save [receipt.vh](examples/receipt.vh) in `examples`, then run it from the
starter's `learn` folder:

```sh
../bin/vh run examples/receipt.vh
```

On Windows PowerShell, use
`..\bin\vh.bat run examples\receipt.vh`. You can also open the file in VS Code
and choose **VarioHyve: Run File**.

```text
Notebooks: 12 credits
Pencils: 5 credits
Total: 17 credits
```

<!-- example-file: examples/receipt.vh -->
```vh
class Program[kernel] {
    Console = kernel.Console;

    lineTotal(unitPrice, quantity) {
        unitPrice.times(quantity)
    }

    receiptLine(label, amount) {
        label.concat(": ").concat(amount.toString).concat(" credits")
    }

    pub run {
        let notebooks = lineTotal(4, 3);
        let pencils = lineTotal(1, 5);
        let total = notebooks.plus(pencils);
        Console.printLine(receiptLine("Notebooks", notebooks));
        Console.printLine(receiptLine("Pencils", pencils));
        Console.printLine(receiptLine("Total", total))
    }
}
```

[Download receipt.vh](examples/receipt.vh)

## Give each method one job

`lineTotal(unitPrice, quantity)` names a calculation. Calling `lineTotal(4, 3)`
supplies `4` as the unit price and `3` as the quantity. Its final expression,
`unitPrice.times(quantity)`, returns `12`. The next call uses the same method
with different inputs.

`receiptLine(label, amount)` turns a label and a number into text. It returns
that text to its caller. `Console.printLine` then displays it. Keeping the
formatting in one method means every receipt line uses the same wording.

`run` connects these steps: calculate two amounts, add them, and print three
lines. The two helper methods have no `pub` because they are used inside this
program. You used a helper for temperature conversion in
[Arithmetic and choices](03-arithmetic-and-choices.md); the same technique helps
organize a larger task.

## Make it yours

Change `lineTotal(4, 3)` to `lineTotal(4, 4)` to buy four notebooks. Predict the
receipt, then run it: notebooks should cost `16` credits and the total should be
`21` credits.

Next, change `" credits"` to `" shop credits"` inside `receiptLine`. All three
lines now use the new wording from that one edit.

[Next: Build a stock list](08-stock-list.md)
