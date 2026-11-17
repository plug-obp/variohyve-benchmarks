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
