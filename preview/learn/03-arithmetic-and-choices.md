# Arithmetic and choices

Numbers receive messages too. Run [arithmetic.vh](examples/arithmetic.vh):

```sh
../bin/vh run examples/arithmetic.vh
```

<!-- example: arithmetic.vh -->
```vh
class Program(kernel) {
    Console = kernel.Console;

    run {
        Console.printLine(2.plus(3).toString);
        Console.printLine(2.plus(3).times(4).toString);
        Console.printLine(7.quotient(2).toString);
        Console.printLine(7.remainder(2).toString)
    }
}
```

[Download arithmetic.vh](examples/arithmetic.vh)

It prints `5`, `20`, `3` and `1`, each on a separate line.
`2.plus(3)` adds, and `2.plus(3).times(4)` multiplies the result by four.
`7.quotient(2)` produces the integer quotient `3`; `7.remainder(2)` gives `1`.
`toString` turns each result into text for the console.

For a useful calculation, open [temperature.vh](examples/temperature.vh):

```sh
../bin/vh run examples/temperature.vh
```

Enter `20`. The output is:

```text
Celsius?
68.0 F
```

<!-- example: temperature.vh -->
```vh
class Program(kernel) {
    Console = kernel.Console;
    Double = kernel.Double;

    fahrenheit(celsius) {
        celsius.times(1.8).plus(32.0)
    }

    run {
        Console.printLine("Celsius?");
        var celsius = Double.parse(Console.readLine.trim);
        Console.printLine(fahrenheit(celsius).toString.concat(" F"))
    }
}
```

[Download temperature.vh](examples/temperature.vh)

`Double.parse` turns the input text into a decimal value. Our `fahrenheit`
method multiplies by `1.8`, then adds `32.0`. Keep both operands decimal when
doing decimal arithmetic; use an integer's `asDouble` message when converting
an existing integer. Double arithmetic is approximate, which is why our tests
will compare decimal results with a tolerance.

Next run [choices.vh](examples/choices.vh):

```sh
../bin/vh run examples/choices.vh
```

Enter `7`:

```text
An integer?
7 is odd
```

<!-- example: choices.vh -->
```vh
class Program(kernel) {
    Console = kernel.Console;
    Integer = kernel.Integer;

    describe(number) {
        number.remainder(2).equals(0).ifTrue(
            fun { "even" },
            fun { "odd" })
    }

    run {
        Console.printLine("An integer?");
        var number = Integer.parse(Console.readLine.trim);
        Console.printLine(number.toString.concat(" is ").concat(describe(number)))
    }
}
```

[Download choices.vh](examples/choices.vh)

`Integer.parse` makes an integer from text. The remainder after division by two
tells us whether it is even. `equals(0)` returns a Boolean, which receives
`ifTrue(yes, no)`. Each branch is a `fun { ... }`: a small block of work to run
later. Only the selected branch runs, and its last expression supplies the result.

Change the input to `8` and the answer becomes `8 is even`.

[Next: Repetition and collections](04-collections.md)
