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
        var calculator = runtime.instantiateModule(
                source.toString(), Files.readString(source), 100_000, kernel);

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
