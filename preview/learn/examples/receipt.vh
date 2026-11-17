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
