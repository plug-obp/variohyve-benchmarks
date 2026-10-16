# Starter reference

The lessons use one deliberately small host world: the Host Seed with the
JavaHostKernel receiver adapters selected when the runtime is created. The
kernel's named services are constructor inputs. Passing a kernel bundle into
an already-created plain Host Seed runtime does not install numeric protocols.

## Values and services

| Value or tool | Useful messages |
|---|---|
| Integer | `plus`, `minus`, `times`, `quotient`, `remainder`, `equals`, `lessThan`, `lessOrEqual`, `greaterThan`, `greaterOrEqual`, `asDouble`, `toString`, `timesRepeat`, `toDo`. |
| Double | `plus`, `minus`, `times`, `dividedBy`, comparisons as above, `abs`, `toString`. |
| String | `concat`, `length`, `equals`, `trim`, `split`. |
| List | `add(value)`, `get(index)`, `set(index, value)`, `size`, `do(block)`, `close`. |
| Map | `put(key, value)`, `get(key)`, `containsKey(key)`, `size`, `keys`, `do(block)`, `close`. |
| Console | `print(text)`, `printLine(text)`, `readLine`. |
| Kernel | `Integer.parse(text)`, `Double.parse(text)`, `Collections.list`, `Collections.map`, `Console`, `null`, `true`, `false`. |

These messages belong to this host library; they do not add a native Integer
class or a universal `toString` to every VarioHyve object. Programs can use
literal receiver messages such as `2.plus(3)` without looking up an `Integer`
binding. Console access still requires an explicitly supplied capability.

Integer arithmetic uses signed 64-bit values and wraps on overflow. Division
truncates toward zero; division by zero fails. Java `Byte`, `Short`, `Integer`
and `Long` inputs are accepted by the integral protocol, which returns `Long`
results. Imported objects keep their identity.

Decimals use Java binary64 doubles; imported `Float` values are accepted and
operations return `Double`. Use `asDouble` explicitly when starting with an
integer. There is no automatic mixing of integer and double arithmetic. Java
rounding, underflow, infinity and NaN behavior applies to operations. A decimal
literal that overflows to infinity is rejected. Numeric exponent notation is
not source syntax.

Strings follow Java UTF-16 length and trim rules. `split` uses a literal,
nonempty separator and keeps empty pieces, including trailing ones. Maps have
string keys; a missing `get` returns host null, so `containsKey` distinguishes
absence from a stored null. List indices start at zero and must be in bounds.
List and map `do` iterate a snapshot: later additions or replacements do not
change entries already captured for that iteration.
Collections retain native entries until replacement or `close`. Closing a
collection releases its entries and prevents further operations; closing it
again is harmless. An iteration already in progress retains its own snapshot.
Stored foreign resources are not globally closed when their collection closes.

`timesRepeat` accepts a nonnegative count; `toDo` visits an ascending inclusive
range and does no work if the end is below the start. All callbacks are
sequential. The examples use final expressions to return callback results.
The early-return form `^` cannot return across a Java callback barrier in
this implementation; it is unnecessary for these lessons.

Console input returns a string without its line ending, or host null at EOF.
The greeting and numeric examples expect the requested input line. For a robust
interactive program, handle EOF before sending string messages. Console output
expects text, so use `toString` on a supported scalar first. No file, network
or process service is given to these programs by the starter.

## API declaration files

The packaged `contracts/JavaHostKernel.vh` describes kernel factories and
receiver protocols for tools. Methods have `{ ? }` bodies, and descriptors
document Java adapter links and behavior. A `_value` declaration documents host
payload; it is not an exported field or unboxing requirement.

Descriptors are removable metadata. They do not execute, install adapters,
resolve imports, or fill holes. Executing a stub still reaches an unresolved
hole. The separate `lib/SUnit.vh` resource is executable VarioHyve code.

## Running and diagnosing

`vh run file.vh` constructs a module with the kernel, then sends `run/0`.
`vh test file.vh` constructs a module with kernel and testing library, then
sends `tests/0`. Paths resolve against the terminal's current directory.
A method's result is not automatically printed: use the console to show it.

Each launcher invocation starts a fresh runtime. Runtime diagnostics identify
the source snapshot and failure kind. Editor diagnostics from a run apply only
to the matching source revision; editing clears them while the terminal keeps
the earlier report.

Scalar assertions use supported value equality; they do not compare entire
lists, maps or arbitrary native objects structurally. Compare collection sizes
and selected elements. Assertion failures and unexpected runtime errors appear
as different test outcomes.

For language and contributor details, see the repository's specification and
starter contract. This tutorial and its fixtures are packaged with the starter,
so running the lessons needs no repository checkout.

[Back to the lessons](README.md)
