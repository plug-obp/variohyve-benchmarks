import java.nio.file.Files;
import java.nio.file.Path;
import vh.syntax.surface.Reader;
import vh.syntax.surface.model.expressions.HoleExpression;
import vh.syntax.surface.model.expressions.literals.NamedClassLiteral;
import vh.syntax.surface.model.expressions.literals.StringLiteral;
import vh.syntax.surface.model.expressions.messages.CanonicalMessage;
import vh.syntax.surface.model.expressions.messages.ImplicitMessageSend;
import vh.syntax.surface.model.statements.ExpressionStatement;

/** Tooling check: read the declaration, never instantiate or execute its holes. */
public final class CheckContract {
    public static void main(String[] arguments) throws Exception {
        var source = Path.of(arguments[0]);
        var result = Reader.readExpression(Files.readString(source));
        if (!result.result().isSuccess()) {
            throw new AssertionError("Invalid API declaration: " + result.result());
        }
        var declaration = (NamedClassLiteral) result.result().toOptional().orElseThrow();
        if (!declaration.name().equals("LabelMaker") || declaration.methods().size() != 1) {
            throw new AssertionError("Expected the LabelMaker API declaration");
        }
        var method = declaration.methods().getFirst();
        if (!method.name().equals("label") || method.formals().size() != 1
                || method.body().size() != 1
                || !(((ExpressionStatement) method.body().getFirst()).expression() instanceof HoleExpression)) {
            throw new AssertionError("Expected label(name) with a hole body");
        }
        boolean hostSeen = false, docSeen = false;
        for (var descriptor : method.descriptorExpressions()) {
            var message = (CanonicalMessage) ((ImplicitMessageSend) descriptor).message();
            switch (message.selector()) {
                case "host" -> {
                    hostSeen = message.arguments().size() == 2
                            && ((StringLiteral) message.arguments().get(0)).value().equals("java")
                            && ((StringLiteral) message.arguments().get(1)).value()
                                .equals("LabelMaker#label(java.lang.Object)");
                    LabelMaker.class.getMethod("label", Object.class);
                }
                case "doc" -> docSeen = message.arguments().size() == 1
                        && !((StringLiteral) message.arguments().getFirst()).value().isBlank();
                default -> throw new AssertionError("Unsupported contract descriptor");
            }
        }
        if (!hostSeen || !docSeen) throw new AssertionError("Missing host or doc descriptor");
        var adapter = new LabelMaker();
        if (adapter.resolve("label", 1) == null
                || adapter.resolve("label", 0) != null
                || adapter.resolve("missing", 1) != null) {
            throw new AssertionError("Expected only label/1");
        }
        System.out.println("Contract parsed; label/1 adapter available.");
    }
}
