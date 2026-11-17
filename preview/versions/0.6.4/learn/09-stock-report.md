# Find what needs restocking

The [stock list](08-stock-list.md) tells us what is on the shelves. Now turn
that data into a useful decision: which products need ordering, and how many
units will bring each one up to five?

This lesson combines three familiar steps: visit an item, choose whether to
include it, and add its contribution to a total. The same pattern can produce
a list of overdue tasks or a summary of scores above a target.

## Run it

Save [stock-report.vh](examples/stock-report.vh) in `examples`, then run it
from the starter's `learn` directory:

```sh
../bin/vh run examples/stock-report.vh
```

On Windows PowerShell, use `..\bin\vh.bat run examples\stock-report.vh`.
You can also open the file in VS Code and choose **VarioHyve: Run File**.

```text
Notebooks: order 2
Folders: order 3
Products to restock: 2
Units to order: 5
```

There are twelve pencils, so they do not appear in the order. The report
counts two kinds of product and five individual units to buy.

<!-- example-file: examples/stock-report.vh -->
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

    reportLowStock(items, target) {
        var products = 0;
        var unitsToOrder = 0;
        items.do(fun(item) {
            item.count.lessThan(target).ifTrue(fun {
                let needed = target.minus(item.count);
                products = products.plus(1);
                unitsToOrder = unitsToOrder.plus(needed);
                Console.printLine(item.name.concat(": order ").concat(needed.toString))
            })
        });
        Console.printLine("Products to restock: ".concat(products.toString));
        Console.printLine("Units to order: ".concat(unitsToOrder.toString))
    }

    pub run {
        let stock = Collections.list;
        stock.add(StockItem("Notebooks", 3));
        stock.add(StockItem("Pencils", 12));
        stock.add(StockItem("Folders", 2));
        reportLowStock(stock, 5)
    }
}
```

[Download stock-report.vh](examples/stock-report.vh)

## Select, then summarize

`reportLowStock(items, target)` receives the list and the desired stock level.
`items.do` visits each item, just as in the previous lesson. The comparison
`item.count.lessThan(target)` decides whether it needs restocking.

Here `ifTrue` takes one block: it runs that block when the comparison is true
and skips it otherwise. We only calculate `needed`, update the totals and print
a line for an item that needs more stock.

Both totals start at zero each time the method runs. `products` increases by
one for each selected item; `unitsToOrder` increases by that item's shortage.
The final two lines print after all items have been visited. Reading a report
does not change the quantities in the stock list.

## Make it yours

Change `reportLowStock(stock, 5)` to `reportLowStock(stock, 10)`. Before running,
work out the shortages. You should see orders for seven notebooks and eight
folders, with totals of two products and fifteen units.

Then try a target of `2`. Every product already meets that target, so the report
prints only the two totals, both zero. This is a useful check that the report
also makes sense when nothing needs ordering.

Next, give one printing method two different ways to present the same stock.

[Next: Pass a small piece of behavior](10-reusable-blocks.md)
