class Program[kernel, labelMaker] {
    Console = kernel.Console;
    labels = labelMaker;

    pub run {
        Console.printLine(labels.label("Ada"))
    }

    pub rejectedLabel {
        labels.label("   ")
    }
}
