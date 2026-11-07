class Program[kernel] {
    Console = kernel.Console;
    Double = kernel.Double;

    fahrenheit(celsius) {
        celsius.times(1.8).plus(32.0)
    }

    pub run {
        Console.printLine("Celsius?");
        let celsius = Double.parse(Console.readLine.trim);
        Console.printLine(fahrenheit(celsius).toString.concat(" F"))
    }
}
