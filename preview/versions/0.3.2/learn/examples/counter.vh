class Program(kernel) {
    Console = kernel.Console;

    class Counter(start) {
        count = start;

        increment {
            count = count.plus(1)
        }
    }

    run {
        var score = Counter(10);
        3.timesRepeat(fun { score.increment });
        Console.printLine("Score: ".concat(score.count.toString))
    }
}
