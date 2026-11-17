# Build a stock list

The shop now needs a list of its supplies. Each entry has two facts that belong
together: a name and a quantity. You will put them in a small object, then keep
several of those objects in a list.

Continue from [Give each step a name](07-named-methods.md). This combines the
lists from [lesson 4](04-collections.md) with the objects from
[lesson 5](05-objects.md).

## Run it

Save [stock-list.vh](examples/stock-list.vh) in `examples`, then run it from the
starter's `learn` folder:

```sh
../bin/vh run examples/stock-list.vh
```

On Windows PowerShell, use
`..\bin\vh.bat run examples\stock-list.vh`, or choose **VarioHyve: Run File**
in VS Code.

```text
Notebooks: 3
Pencils: 12
Folders: 2
Total units: 17
```

<!-- example-file: examples/stock-list.vh -->
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

    pub run {
        let stock = Collections.list;
        stock.add(StockItem("Notebooks", 3));
        stock.add(StockItem("Pencils", 12));
        stock.add(StockItem("Folders", 2));
        var total = 0;
        stock.do(fun(item) {
            Console.printLine(item.name.concat(": ").concat(item.count.toString));
            total = total.plus(item.count)
        });
        Console.printLine("Total units: ".concat(total.toString))
    }
}
```

[Download stock-list.vh](examples/stock-list.vh)

## Keep related facts together

`StockItem("Notebooks", 3)` creates one object. Its `itemName` and `units` slots
keep the constructor inputs; its public `name` and `count` methods answer
questions about that item. A name stays with its quantity when the object is
added to a list. You do not need separate lists of names and numbers.

`Collections.list` can hold these objects just as it held scores in lesson 4.
On each visit, `item` is one complete stock item. The block asks it for its
name and count, prints a line, and adds the count to `total`. The same block
works for every item.

The list contains three entries, while their counts add up to seventeen units.
`stock.size` would answer how many entries there are; our running total answers
how many individual supplies the shop has.

## Make it yours

Add `stock.add(StockItem("Markers", 5));` after the folders and before
`var total = 0;`. Run again. The new line should be `Markers: 5`, and the total
should become `22`. You added data without changing the reporting loop.

Next you will use the same item objects to show which supplies need restocking.

[Next: Find what needs restocking](09-stock-report.md)
