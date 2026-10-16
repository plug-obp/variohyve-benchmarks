# Call VarioHyve from Java

An existing Java application can use a VarioHyve module as a component.
[calculator.vh](examples/java/calculator.vh) exposes `twice(value)`, which returns
`value.times(2)`. There is no required `run` method when Java chooses the entry
message itself.

<!-- example: java/calculator.vh -->
```vh
class Calculator(kernel) {
    twice(value) {
        value.times(2)
    }

    unfinished {
        ?
    }
}
```

[Download calculator.vh](examples/java/calculator.vh)

Read [Embed.java](examples/java/Embed.java). The important steps are:

1. Create `JavaHostKernel` with the input and output streams the application owns.
2. Call `kernel.newRuntime()` to select the Host Seed and its receiver protocols.
3. Read a source snapshot and pass its name, text and constructor arguments to
   `runtime.instantiateModule`.
4. Keep the returned `ExpatReceipt` in a Java try-with-resources block and send
   `calculator.send("twice", 21L)` through it.

<!-- example: java/Embed.java -->
```java
import java.nio.file.Files;
import java.nio.file.Path;
import vh.host.JavaHostKernel;
import vh.vm.boundary.BoundaryException;
import vh.vm.boundary.Diagnostic;

public final class Embed {
    public static void main(String[] arguments) throws Exception {
        var source = Path.of(arguments[0]).toAbsolutePath();
        var kernel = new JavaHostKernel(System.in, System.out);
        var runtime = kernel.newRuntime();
        try (var calculator = runtime.instantiateModule(
                source.toString(), Files.readString(source), 100_000, kernel)) {

            Object answer = calculator.send("twice", 21L);
            if (!(answer instanceof Long value) || value != 42L) {
                throw new AssertionError("Expected the Java Long result 42");
            }
            System.out.println("twice(21) = " + answer);

            try {
                calculator.send("unfinished");
                throw new AssertionError("Expected an unresolved hole");
            } catch (BoundaryException failure) {
                if (failure.kind() != BoundaryException.Kind.LANGUAGE_FAILURE
                        || failure.diagnostic().reason() != Diagnostic.Reason.UNRESOLVED_HOLE) {
                    throw failure;
                }
                System.out.println("Failure: " + failure.kind() + " / " + failure.diagnostic().reason());
                if (failure.diagnostic().site() == null) {
                    throw new AssertionError("Expected a source location");
                }
                System.out.println("Source: " + Path.of(failure.diagnostic().site().sourceName()).getFileName());
            }
        }
    }
}
```

[Download Embed.java](examples/java/Embed.java)

An **Expat** is a VarioHyve object exposed to Java through messages. Its receipt
keeps that object available until `close()`. Each native result from an independent
host send comes with its own receipt, which the recipient closes when finished.
Use `retain()` for another independently releasable holder. Closing one receipt
does not close other holders or destroy an object still used by native code.
In this example the result is a Java `Long` with value `42`, so it needs no receipt.

From the starter's `learn` directory:

```sh
mkdir -p out
javac -cp '../lib/*' -d out examples/java/Embed.java
java -cp 'out:../lib/*' Embed examples/java/calculator.vh
```

On Windows PowerShell, create `out` with `New-Item -ItemType Directory -Force out`
and use `"out;../lib/*"` for the Java classpath.

```text
twice(21) = 42
Failure: LANGUAGE_FAILURE / UNRESOLVED_HOLE
Source: calculator.vh
```

The last two lines demonstrate a call to the intentionally unfinished method.
The Java client checks `failure.kind()` and `failure.diagnostic().reason()`;
the diagnostic also records the source location from the snapshot we supplied.
Use those fields to handle failures, rather than comparing error messages.

The `100_000` argument bounds module construction. Subsequent `ExpatReceipt.send`
calls use the runtime's default entry budget; that construction argument does
not configure every later call.

You have now written programs, made objects, checked their behavior and connected
both sides of the Java boundary. Try adding a second operation to the calculator,
then add a test and call it from Java.

Next: [From starter to your own world](09-worlds.md).

[Starter reference](reference.md) · [Back to the lessons](README.md)
