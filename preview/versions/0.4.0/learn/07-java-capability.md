# Add a capability written in Java

Sometimes a program needs a tool supplied by Java. Our example is a small
label maker: it accepts a name and returns a greeting. Its behavior is implemented
by [LabelMaker.java](examples/java/LabelMaker.java), using the public
`ForeignObject` interface.

<!-- example: java/LabelMaker.java -->
```java
import vh.vm.boundary.BoundaryException;
import vh.vm.boundary.Diagnostic;
import vh.vm.boundary.ForeignObject;
import vh.vm.boundary.ForeignOperation;

/** A deliberately small Java capability: format one nonblank name. */
public final class LabelMaker implements ForeignObject {
    @Override
    public ForeignOperation resolve(String selector, int arity) {
        if (selector.equals("label") && arity == 1) {
            return arguments -> label(arguments.get(0));
        }
        return null;
    }

    public String label(Object value) {
        if (!(value instanceof String name)) {
            throw new BoundaryException(new Diagnostic(
                    BoundaryException.Kind.CONVERSION,
                    Diagnostic.Reason.CONVERSION_FAILED,
                    "label needs a String", null));
        }
        if (name.isBlank()) {
            throw new BoundaryException(new Diagnostic(
                    BoundaryException.Kind.FOREIGN_FAILURE,
                    Diagnostic.Reason.FOREIGN_REJECTION,
                    "label needs a nonblank name", null));
        }
        return "Hello, " + name.trim() + "!";
    }
}
```

[Download LabelMaker.java](examples/java/LabelMaker.java)

The adapter's `resolve(selector, arity)` returns an operation only for
`label/1`. Returning `null` means that operation is absent. Resolution does no
work; the selected operation calls `label` exactly once. That method checks its
input, formats the greeting and returns a Java string.

Native arguments passed to an operation are attached to that invocation. The
adapter can call them synchronously while the invocation is active. An adapter
that stores a native argument for later declares its position with
`operation.detachable(index)`, calls `ForeignOperation.retainArgument(arguments,
index)` before storing it, and releases the returned receipt when finished.
Plainly saving the callback proxy does not keep it usable after the invocation.
The label maker only reads a String, so it needs no retention declaration.

[use-label.vh](examples/java/use-label.vh) declares
`class Program(kernel, labelMaker)`. It retains the label maker in a slot and
sends `labels.label("Ada")`. A Java capability used inside VarioHyve is called
an **Alien**; the source uses it by sending messages, just like the console.

<!-- example: java/use-label.vh -->
```vh
class Program(kernel, labelMaker) {
    Console = kernel.Console;
    labels = labelMaker;

    run {
        Console.printLine(labels.label("Ada"))
    }

    rejectedLabel {
        labels.label("   ")
    }
}
```

[Download use-label.vh](examples/java/use-label.vh)

[UseLabel.java](examples/java/UseLabel.java) constructs a JavaHostKernel,
creates a runtime, and explicitly passes both `kernel` and `new LabelMaker()`
to `instantiateModule`. No registration or reflection is needed. The normal
`vh run` command supplies only the standard kernel, so this example has its own
small Java launcher.

<!-- example: java/UseLabel.java -->
```java
import java.nio.file.Files;
import java.nio.file.Path;
import vh.host.JavaHostKernel;
import vh.vm.boundary.BoundaryException;
import vh.vm.boundary.Diagnostic;

public final class UseLabel {
    public static void main(String[] arguments) throws Exception {
        var source = Path.of(arguments[0]).toAbsolutePath();
        var kernel = new JavaHostKernel(System.in, System.out);
        var runtime = kernel.newRuntime();
        try (var program = runtime.instantiateModule(
                source.toString(), Files.readString(source), 100_000,
                kernel, new LabelMaker())) {
            program.send("run");

            // This is a new host entry, deliberately demonstrating a selected failure.
            try {
                program.send("rejectedLabel");
                throw new AssertionError("Expected the adapter to reject blank text");
            } catch (BoundaryException failure) {
                if (failure.kind() != BoundaryException.Kind.FOREIGN_FAILURE
                        || failure.diagnostic().reason() != Diagnostic.Reason.FOREIGN_REJECTION) {
                    throw failure;
                }
                System.out.println("Rejected: " + failure.kind() + " / " + failure.diagnostic().reason());
            }
        }
    }
}
```

[Download UseLabel.java](examples/java/UseLabel.java)

From the starter's `learn` directory, using a JDK 23 `javac` and `java`:

```sh
mkdir -p out
javac -cp '../lib/*' -d out examples/java/LabelMaker.java examples/java/UseLabel.java
java -cp 'out:../lib/*' UseLabel examples/java/use-label.vh
```

On Windows PowerShell, use `New-Item -ItemType Directory -Force out` in place of
`mkdir -p out`, and use `"out;../lib/*"` for Java's classpath. The `javac`
classpath remains `"../lib/*"`.

The output is:

```text
Hello, Ada!
Rejected: FOREIGN_FAILURE / FOREIGN_REJECTION
```

The second line comes from a deliberate blank-name request. The Java client
catches `BoundaryException` and checks its structured kind and reason. A selected
operation's rejection is a failure; it must not be returned as a lookup miss or
retried under another selector.

[LabelMaker.vh](examples/java/LabelMaker.vh) is the matching API description.
Its `label(name) { ? }` body marks the missing VarioHyve implementation, while
`host` identifies the Java adapter method and `doc` explains its contract. Open
the file in VS Code to browse it like VarioHyve source. It is documentation,
not the implementation and not a program to run. Descriptors never load Java
or fill the hole.

<!-- example: java/LabelMaker.vh -->
```vh
class LabelMaker {
    label(name) { ? }
        : host("java", "LabelMaker#label(java.lang.Object)")
        : doc("Accepts a nonblank String, trims it, and returns a greeting String. Other values fail with CONVERSION; blank text fails with FOREIGN_FAILURE / FOREIGN_REJECTION. No I/O or callbacks.");
}
```

[Download LabelMaker.vh](examples/java/LabelMaker.vh)

The example checker parses the declaration without executing it, verifies the
adapter's selector/arity, and runs the actual Java launcher.

[Next: Call VarioHyve from Java](08-embedding.md)
