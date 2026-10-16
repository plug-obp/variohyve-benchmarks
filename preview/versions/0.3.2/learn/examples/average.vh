class Program(kernel) {
    Console = kernel.Console;
    Collections = kernel.Collections;

    run {
        var scores = Collections.list;
        scores.add(10);
        scores.add(20);
        scores.add(30);
        var total = 0;
        scores.do(fun(score) { total = total.plus(score) });
        var average = total.asDouble.dividedBy(scores.size.asDouble);
        Console.printLine("Total: ".concat(total.toString));
        Console.printLine("Average: ".concat(average.toString))
    }
}
