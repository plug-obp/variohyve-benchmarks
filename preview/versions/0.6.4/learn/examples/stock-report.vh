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
