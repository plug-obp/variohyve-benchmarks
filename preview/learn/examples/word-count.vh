class Program(kernel) {
    Console = kernel.Console;
    Collections = kernel.Collections;

    run {
        var counts = Collections.map;
        "red blue red green blue red".split(" ").do(fun(word) {
            var previous = counts.containsKey(word).ifTrue(
                fun { counts.get(word) },
                fun { 0 });
            counts.put(word, previous.plus(1))
        });
        counts.do(fun(word, count) {
            Console.printLine(word.concat(": ").concat(count.toString))
        })
    }
}
