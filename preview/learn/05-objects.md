# Objects that remember

Run [counter.vh](examples/counter.vh):

```sh
../bin/vh run examples/counter.vh
```

```text
Score: 13
```

The program declares a `Counter` class inside `Program`. `Counter(10)` makes an
object whose private `current` slot starts at ten. Sending `increment` updates that slot;
sending `count` reads it. Each new counter has its own count.

<!-- example: counter.vh -->
```vh
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
```

[Download counter.vh](examples/counter.vh)

`start` is a constructor input. The slot initializer copies it into `current`
so methods can keep using the value. `var` gives this private slot a getter and
setter; `current = current.plus(1)` is convenient setter syntax. The public
`count` method exposes only a read, so clients can increment the counter but
cannot replace its state through `count!`.

In `run`, `3.timesRepeat` sends `increment` three times, then the program reads
and prints the score. Try constructing two counters with different starting
values and incrementing only one of them.

[Next: Test your program](06-testing.md)
