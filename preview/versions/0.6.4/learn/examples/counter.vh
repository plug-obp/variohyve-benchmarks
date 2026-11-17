class Program[kernel] {
    Console = kernel.Console;

    class Counter[start] {
        var current = start;
        pub count { current }

        pub increment {
            current = current.plus(1)
        }
    }

    pub run {
        let score = Counter(10);
        3.timesRepeat(fun { score.increment });
        Console.printLine("Score: ".concat(score.count.toString))
    }
}
