# Objects that remember

Run [counter.vh](examples/counter.vh):

```sh
../bin/vh run examples/counter.vh
```

```text
Score: 13
```

The program declares a `Counter` class inside `Program`. `Counter(10)` makes an
object whose `count` slot starts at ten. Sending `increment` updates that slot;
sending `count` reads it. Each new counter has its own count.

<!-- example: counter.vh -->
```vh
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
```

[Download counter.vh](examples/counter.vh)

`start` is a constructor input. The slot initializer copies it into `count`
so methods can keep using the value. A slot has an ordinary getter and setter;
`count = count.plus(1)` is convenient setter syntax.

In `run`, `3.timesRepeat` sends `increment` three times, then the program reads
and prints the score. Try constructing two counters with different starting
values and incrementing only one of them.

[Next: Test your program](06-testing.md)
