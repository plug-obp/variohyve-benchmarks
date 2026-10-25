# Values, messages and input

Open [greeting.vh](examples/greeting.vh), then run it from the `learn` folder:

```sh
../bin/vh run examples/greeting.vh
```

Type `Ada` and press Enter. The program prints:

```text
What is your name?
Hello, Ada!
```

<!-- example: greeting.vh -->
```vh
class Program(kernel) {
    Console = kernel.Console;

    run {
        Console.printLine("What is your name?");
        var name = Console.readLine.trim;
        Console.printLine("Hello, ".concat(name).concat("!"))
    }
}
```

[Download greeting.vh](examples/greeting.vh)

`Console = kernel.Console;` keeps the console in a slot so our methods can use
it. Constructor inputs such as `kernel` are available while the object is being
built; a slot retains what we need afterward.

`var name` introduces a local variable. `Console.readLine` asks for a line of
text. Sending `trim` to that text removes leading and trailing spaces. Sending
`concat(name)` to `"Hello, "` returns new text, and another `concat` adds `!`.
That is a message chain: each result receives the next message.

A message without arguments needs no parentheses: `name.length` asks for the
text's length. Semicolons separate statements. The last expression of a method
is its result; no `return` keyword is needed.

Try entering a name with spaces around it. Then change the greeting and run it
again. The console keeps input and output visible while you experiment.

[Next: Arithmetic and choices](03-arithmetic-and-choices.md)
