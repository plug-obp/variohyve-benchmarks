class Program(kernel) {
    Console = kernel.Console;

    run {
        1.toDo(5, fun(number) {
            Console.printLine(number.toString.concat(" x 3 = ").concat(number.times(3).toString))
        })
    }
}
