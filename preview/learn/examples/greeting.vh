class Program[kernel] {
    Console = kernel.Console;

    pub run {
        Console.printLine("What is your name?");
        let name = Console.readLine.trim;
        Console.printLine("Hello, ".concat(name).concat("!"))
    }
}
