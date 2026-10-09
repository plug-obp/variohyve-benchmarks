class Program(kernel) {
    Console = kernel.Console;

    run {
        Console.printLine("What is your name?");
        var name = Console.readLine.trim;
        Console.printLine("Hello, ".concat(name).concat("!"))
    }
}
