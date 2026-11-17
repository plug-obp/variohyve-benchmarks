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
