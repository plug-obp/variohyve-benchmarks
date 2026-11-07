# Language and starter reference

Use this page when you want to look something up. You can keep writing programs
without reading it from beginning to end.

## While editing your first programs

| I want to… | A useful starting point |
|---|---|
| Create an object | Define `class Counter[start] { ... }`, then create one with `Counter(10)`. See [objects](05-objects.md). |
| Save an input for later use | Initialize a slot, such as `Console = kernel.Console;`, and use that slot in methods. See [your first program](01-install.md). |
| Expose an operation | Write `pub count { current }` so another object can ask for the count. See [objects](05-objects.md). |
| Keep or change state | Use `var current = start;` for a counter that changes, and `current = current.plus(1)` to increase it. See [objects](05-objects.md). |
| Print something | Send `Console.printLine("Hello!")` to the console your program was given. See [values and input](02-values-and-input.md). |
| Run a test | From the starter's `learn` directory, run `../bin/vh test examples/tests/lessons.vh` (Windows: `..\bin\vh.bat test examples\tests\lessons.vh`). See [testing](06-testing.md). |

The sections below explain the precise rules and the starter's services. For a
complete account, follow the linked specification chapters when you need them.

## Language essentials

These rules apply to the language independently of the starter's Java services.
The complete [specification](https://obpcdl.org/variohyve-benchmarks/spec/index.html) owns their detailed meaning.

| Form or idea | Meaning in these lessons |
|---|---|
| `class Counter[start]` | Brackets declare constructor inputs. `Counter(10)` invokes the class with an argument. |
| `current = start;` | An object slot is private and immutable by default. Its initializer is required. |
| `var current = start;` | A mutable private slot has a getter and setter. `pub` independently publishes accessors. |
| `pub count { current }` | A public method exposes behavior. Methods without `pub` are private. |
| `let score = Counter(10);` | An immutable local retains a reference; it does not freeze the referenced counter. Use `var` for a rebindable local. |
| `score.count` / `score.increment()` | Access and invocation are message sends. Parentheses request invocation, including callable values obtained through accessors. |
| `current = value` | Assignment sends a setter message. Getters and setters are selected independently; an immutable declaration has no setter of its own. |
| A method or lambda body | Its final expression supplies its result. An omitted result is not an implicit null. |

Constructor parameters are available during initialization, not as bindings in
instance methods. Save a dependency in a slot, as `Console = kernel.Console`
does in [lesson 1](01-install.md), or `current = start` in
[lesson 5](05-objects.md). A closure deliberately created during initialization
can capture its inputs. Captured data can outlive the invocation that created it;
that does not keep an early-return target alive.

A normal module receives its external capabilities through constructor inputs.
It does not inherit the caller's variables or a global kernel. A recipe is an
explicit tooling context with its own supplied import and file capabilities;
its imported application receives only the inputs the recipe passes.
See [lesson 9](09-worlds.md) for this separation in a complete project.

Composition preserves each applied contribution's own slots, even when names
match. Applying a mixin imports its owned contribution; inheriting a superclass
retains its assembled chain. Public publication and private lexical authority
remain distinct. The [objects and classes chapter](https://obpcdl.org/variohyve-benchmarks/spec/objects-and-classes.html)
covers composition beyond this introductory course.

## Java and Lean

| Implementation or world | What to use it for |
|---|---|
| Java `VisitorSemanticsVM` with JavaHostKernel | Run this course, Java interoperation, the VS Code tools and packaged recipe projects. |
| Lean native machine | Execute native source with explicit native libraries and the supported source-backed session profiles. Its frontend and native refinement have checked proofs with stated premises. |
| A native library or foreign adapter | Supplies value protocols and services. Selecting a VM does not make arbitrary libraries equivalent or give a program console/file access. |

The Java starter's signed 64-bit integers, UTF-16 strings and synchronous Java
callbacks are its library/boundary choices. Native number and text libraries
have their own contracts; these lessons do not claim to run unchanged in a
scalar-free Lean world. Java–Lean differential tests compare results, failures,
aliases and effects on supported shared inputs. They do not prove the Java VM
or arbitrary foreign adapters correct. The [conformance map](https://obpcdl.org/variohyve-benchmarks/preview/versions/0.6.3/reference/conformance.html#specification-java-and-lean)
connects the specification, tests and Lean proof scope.

## Three layers of a world

| Layer | What it determines |
|---|---|
| Language | Objects, messages, visibility, storage, composition and control. |
| Selected adapters or libraries | Protocols for values such as numbers and strings. |
| Module constructor inputs | Services and capabilities supplied to that application. |

Numeric literals do not imply an ambient application kernel. The starter selects
scalar protocols when creating its runtime, then separately passes a kernel as an
explicit module input. [Lesson 11](11-composition.md) shows how a small application combines supplied
components and replaces one without changing the application.

## Starter world

The lessons use one deliberately small host world: the fixed structural runtime
with JavaHostKernel receiver adapters selected when the runtime is created. The
kernel's named services are constructor inputs. Passing a kernel bundle into
an already-created runtime does not install numeric protocols.

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
