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
