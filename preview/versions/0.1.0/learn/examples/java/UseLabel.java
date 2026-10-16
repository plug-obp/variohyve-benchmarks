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
        var program = runtime.instantiateModule(
                source.toString(), Files.readString(source), 100_000,
                kernel, new LabelMaker());
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
