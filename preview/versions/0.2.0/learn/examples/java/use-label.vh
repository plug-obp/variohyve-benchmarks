class Program(kernel, labelMaker) {
    Console = kernel.Console;
    labels = labelMaker;

    run {
        Console.printLine(labels.label("Ada"))
    }

    rejectedLabel {
        labels.label("   ")
    }
}
