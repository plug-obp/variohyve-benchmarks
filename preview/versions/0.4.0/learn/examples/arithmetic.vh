class Program(kernel) {
    Console = kernel.Console;

    run {
        Console.printLine(2.plus(3).toString);
        Console.printLine(2.plus(3).times(4).toString);
        Console.printLine(7.quotient(2).toString);
        Console.printLine(7.remainder(2).toString)
    }
}
