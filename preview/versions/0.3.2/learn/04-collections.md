# Repetition and collections

Run [table.vh](examples/table.vh):

```sh
../bin/vh run examples/table.vh
```

```text
1 x 3 = 3
2 x 3 = 6
3 x 3 = 9
4 x 3 = 12
5 x 3 = 15
```

<!-- example: table.vh -->
```vh
class Program(kernel) {
    Console = kernel.Console;

    run {
        1.toDo(5, fun(number) {
            Console.printLine(number.toString.concat(" x 3 = ").concat(number.times(3).toString))
        })
    }
}
```

[Download table.vh](examples/table.vh)

`1.toDo(5, fun(number) { ... })` visits integers one through five, including both
ends. The block receives each number. To repeat work a fixed number of times
without an index, use `3.timesRepeat(fun { ... })`.

Run [average.vh](examples/average.vh) to collect several scores:

```sh
../bin/vh run examples/average.vh
```

```text
Total: 60
Average: 20.0
```

<!-- example: average.vh -->
```vh
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
```

[Download average.vh](examples/average.vh)

`Collections.list` creates an empty mutable list. `add(value)` appends a value,
and `do(fun(score) { ... })` visits each score in order. The block updates the
captured `total` variable using `total = total.plus(score)`. The final division
converts the total and list size to doubles first.

Use `get(0)` for the first element and `set(0, value)` to replace it. Indices
start at zero, and `size` is the number of elements.

Finally run [word-count.vh](examples/word-count.vh):

```sh
../bin/vh run examples/word-count.vh
```

```text
red: 3
blue: 2
green: 1
```

<!-- example: word-count.vh -->
```vh
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
```

[Download word-count.vh](examples/word-count.vh)

`split(" ")` breaks text at each space and returns a list. A map from
`Collections.map` associates string keys with values. This program checks
`containsKey(word)`, gets the previous count when present, and stores the next
count with `put(word, value)`. Map `do` passes two block arguments: key and value.
Entries appear in the order their keys were first added.

Try a different sequence of words separated by single spaces. Both list and
map iteration run one callback at a time over a snapshot of their entries.
When finished with a collection, send `close` to release the values it retains.
A closed collection cannot be used again, but an iteration already in progress
finishes with its snapshot. Replacing an entry releases the old retained value.

[Next: Objects that remember](05-objects.md)
