# Learn VarioHyve

Welcome! Let's build small programs that greet someone, convert a temperature,
count words and keep score. Along the way you will learn how VarioHyve objects
communicate by sending messages, and how a program receives the tools it needs.

Start with [Install and say hello](01-install.md). Each chapter has a complete
example shown inline, with a download link so you can run and change it.

1. [Install and say hello](01-install.md)
2. [Values, messages and input](02-values-and-input.md)
3. [Arithmetic and choices](03-arithmetic-and-choices.md)
4. [Repetition and collections](04-collections.md)
5. [Objects that remember](05-objects.md)
6. [Test your program](06-testing.md)
7. [Add a capability written in Java](07-java-capability.md)
8. [Call VarioHyve from Java](08-embedding.md)
9. [From starter to your own world](09-worlds.md)
10. [Publish and consume a tiny native package](10-native-packages.md)

The [starter examples folder](examples/) contains the first eight lessons'
programs and their input and output fixtures. The [recipe lesson files](projects/README.md)
contain the complete application, recipes, tests and launch configuration from
lessons 9 and 10. Each lesson shows its files inline and links their downloads.
The [starter reference](reference.md) collects details for when you need them.
You do not need to read it before writing your first program.

The first eight lessons use the Host Seed with JavaHostKernel. The last two
assemble explicit recipe worlds and package their dependencies. The kernel gives us familiar
numbers, text, collections and a console. A capability is simply a tool a program
is given: our first program receives a console through its `kernel` input.

Contributors can check the actual lesson files with
`python3 scripts/check-learn.py --distribution vh-host/build/install/vh-host`
from the repository root after building the starter distribution. The checker
also compiles the Java lessons against the packaged jars.

The [native multiplier package](packages/multiplier/README.md) is a separate
producer folder used by the packaging archive journey; it is not an additional
starter-kernel lesson.
