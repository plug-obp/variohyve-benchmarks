# Tiny native multiplier package

Entry: `Multiplier.vh`. Construction requires one integer `factor`; the resulting
object implements `multiply(value)`. It needs the selected startup value adapter's
integer `times/1` protocol, and no filesystem, console or other capabilities.

Copy this folder into a consumer's `packages/multiplier` directory. Its native
recipe constructs the module with `importModule(files.resolve(
"packages/multiplier/Multiplier.vh"), 3)` and supplies the result to its application.
Its native packaging policy captures that same entry file explicitly. There is
no registry, package-name lookup or implicit dependency discovery.

The extracted-archive journey copies this independent producer folder into a
fresh consumer. The custom Alien journey substitutes a packaged Java provider
implementing the same `multiply/1` protocol without changing application or tests.
