class Program(kernel) {
    Console = kernel.Console;
    Integer = kernel.Integer;

    describe(number) {
        number.remainder(2).equals(0).ifTrue(
            fun { "even" },
            fun { "odd" })
    }

    run {
        Console.printLine("An integer?");
        var number = Integer.parse(Console.readLine.trim);
        Console.printLine(number.toString.concat(" is ").concat(describe(number)))
    }
}
