# Runnable lesson files

Run programs with `vh run file.vh`; run `tests/lessons.vh` with
`vh test tests/lessons.vh`. See [the installation lesson](../01-install.md)
for commands from the starter's `learn` folder.

`intentional-failures/` is separate from the passing tests. Its assertion and
runtime-error cases are teaching exercises and must return a nonzero status.

`java/use-label.vh` and `java/calculator.vh` are components launched by their
Java clients. `java/LabelMaker.vh` is a documentation-only API declaration:
the checker parses it without executing its holes.

[manifest.json](manifest.json) identifies every complete VarioHyve example,
input/output fixtures and expected exit status. The repository checker runs
the real files, compiles all Java clients against the installed starter jars,
and compares results. It also verifies tutorial code excerpts against their
source files. It never rewrites expected output automatically.

Examples that read input expect the supplied fixture or a typed line. To see
the exact output without terminal echo, redirect input, for example:

```sh
../bin/vh run examples/greeting.vh < examples/fixtures/greeting.in
```

That command assumes the current directory is `learn`, as in the lessons.
