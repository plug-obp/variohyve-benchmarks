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
class Program[kernel] {
    Console = kernel.Console;

    pub run {
        Console.printLine("What is your name?");
        let name = Console.readLine.trim;
        Console.printLine("Hello, ".concat(name).concat("!"))
    }
}
```

[Download greeting.vh](examples/greeting.vh)

`Console = kernel.Console;` keeps the console in a slot so our methods can use
it. Constructor inputs such as `kernel` are available while the object is being
built; a slot retains what we need afterward. Without `pub` or `var`, this slot
is private and immutable: clients cannot fetch or replace the console through
the program. The console itself still performs I/O; an immutable reference does
not make its receiver immutable. `pub run` is the intended public entry.

`let name` introduces an immutable local reference; use `var name` when the
local itself needs reassignment. Both require an initializer. A `let` can still
refer to a mutable collection or counter. `Console.readLine` asks for a line of
text. Sending `trim` to that text removes leading and trailing spaces. Sending
`concat(name)` to `"Hello, "` returns new text, and another `concat` adds `!`.
That is a message chain: each result receives the next message.

Local names are reserved for the whole body; reading one before its initializer
runs fails. Assignment remains a setter send. A `let` has no local setter, but an
enclosing object may provide a setter with the same base name.

A message without arguments needs no parentheses: `name.length` asks for the
text's length. Semicolons separate statements. The last expression of a method
is its result; no `return` keyword is needed.

Try entering a name with spaces around it. Then change the greeting and run it
again. The console keeps input and output visible while you experiment.

[Next: Arithmetic and choices](03-arithmetic-and-choices.md)
