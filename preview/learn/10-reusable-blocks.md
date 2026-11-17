# Pass a small piece of behavior

After the [restocking report](09-stock-report.md), let's use the stock list for
two more jobs: printing shelf labels and printing quantities. Both jobs visit
the same items. Only the text for each item changes.

You have already supplied blocks to `do` and `ifTrue`. Now write your own
method that accepts a block. The caller chooses how to turn an item into text;
the method handles visiting the items and printing the results.

## Run it

Save [stock-format.vh](examples/stock-format.vh) in `examples`, then run it
from the starter's `learn` directory:

```sh
../bin/vh run examples/stock-format.vh
```

On Windows PowerShell, use `..\bin\vh.bat run examples\stock-format.vh`.
You can also open the file in VS Code and choose **VarioHyve: Run File**.

```text
Shelf labels
Notebooks
Pencils
Folders
Stock counts
Notebooks: 3
Pencils: 12
Folders: 2
```

<!-- example-file: examples/stock-format.vh -->
```vh
class Program[kernel] {
    Console = kernel.Console;
    Collections = kernel.Collections;

    class StockItem[label, quantity] {
        itemName = label;
        units = quantity;
        pub name { itemName }
        pub count { units }
    }

    printStock(items, format) {
        items.do(fun(item) {
            Console.printLine(format(item))
        })
    }

    pub run {
        let stock = Collections.list;
        stock.add(StockItem("Notebooks", 3));
        stock.add(StockItem("Pencils", 12));
        stock.add(StockItem("Folders", 2));
        Console.printLine("Shelf labels");
        printStock(stock, fun(item) { item.name });
        Console.printLine("Stock counts");
        printStock(stock, fun(item) {
            item.name.concat(": ").concat(item.count.toString)
        })
    }
}
```

[Download stock-format.vh](examples/stock-format.vh)

## Supply the work, then call it

`printStock` takes two inputs: a list and a block named `format`. The block's
job is small and specific: receive one stock item and return one line of text.

In the first call, `fun(item) { item.name }` creates that block and passes it
to `printStock`. Inside the loop, `format(item)` runs the supplied block on the
current item. Its final expression supplies the text that `Console.printLine`
prints. This happens once for each item.

The second call supplies a block that joins the name and quantity. The loop
and console code stay in one place. You can add another presentation by
supplying another block with the same one-item-in, text-out job.

## Make it yours

Change the final expression in the second formatting block to
`item.count.toString.concat(" x ").concat(item.name)`. The shelf labels stay
the same, while the second group becomes:

```text
Stock counts
3 x Notebooks
12 x Pencils
2 x Folders
```

You can now pass a small operation to a method you wrote yourself. For a
collaborator with several operations or its own state, an object is useful.
The review-desk lesson gives you that next step, followed by
[tests for collaborating objects](12-component-tests.md).

[Next: Bring components together](11-composition.md)
