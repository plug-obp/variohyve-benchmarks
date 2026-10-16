# Test your program

Open [tests/lessons.vh](examples/tests/lessons.vh), then run:

```sh
../bin/vh test examples/tests/lessons.vh
```

<!-- example: tests/lessons.vh -->
```vh
class Tests(kernel, testing) {
    Collections = kernel.Collections;
    Testing = testing;

    class Counter(start) {
        count = start;
        increment { count = count.plus(1) }
    }

    fahrenheit(celsius) { celsius.times(1.8).plus(32.0) }

    tests {
        var suite = Testing.suite("Lesson tests");
        suite.add("arithmetic", fun(assert) {
            assert.assertEquals(20, 2.plus(3).times(4));
            assert.assertTrue(7.remainder(2).equals(1))
        });
        suite.add("temperature", fun(assert) {
            assert.assertNear(68.0, fahrenheit(20.0), 0.000001)
        });
        suite.add("collections", fun(assert) {
            var values = Collections.list;
            values.add(10);
            values.add(20);
            values.set(0, 15);
            var counts = Collections.map;
            counts.put("apples", values.get(0));
            assert.assertEquals(2, values.size);
            assert.assertEquals(15, counts.get("apples"));
            assert.assertEquals("apples", counts.keys.get(0))
        });
        suite.add("fresh counter", fun(assert) {
            var counter = Counter(10);
            counter.increment;
            counter.increment;
            assert.assertEquals(12, counter.count)
        });
        suite
    }
}
```

[Download lessons.vh](examples/tests/lessons.vh)

The four named cases cover arithmetic, temperature conversion, collections and
a fresh counter. Each case should pass. The exact report is kept in the
[expected output fixture](examples/fixtures/tests.out).

Test modules receive two tools: `kernel` and `testing`. Retain the testing
library in a slot, create a suite with `Testing.suite("Lesson tests")`, then add
named cases with `suite.add(name, fun(assert) { ... })`. Return the suite as the
last expression of `tests`.

Each case receives fresh assertions. Create its data and objects inside the
case so another case cannot change its fixture.

| Assertion | Use |
|---|---|
| `assert.assertTrue(condition)` | Check a Boolean condition. |
| `assert.assertEquals(expected, actual)` | Compare supported scalar values, such as integers and strings. |
| `assert.assertNear(expected, actual, tolerance)` | Compare doubles within an absolute tolerance. |
| `assert.fail(message)` | Record a failure with your own explanation. |

An assertion records a failure and lets later assertions continue. A runtime
error stops that case; the driver reports it separately and attempts the next
case. Tests with any failure or error exit unsuccessfully, which also makes them
useful in a build script.

To practice, run the deliberately incorrect example:

```sh
../bin/vh test examples/intentional-failures/assertion.vh
```

<!-- example: intentional-failures/assertion.vh -->
```vh
class Tests(kernel, testing) {
    Testing = testing;

    tests {
        var suite = Testing.suite("Practice reading a failure");
        suite.add("two plus three", fun(assert) {
            assert.assertEquals(6, 2.plus(3))
        });
        suite.add("the next case still runs", fun(assert) {
            assert.assertEquals("hello", " hello ".trim)
        });
        suite
    }
}
```

[Download assertion.vh](examples/intentional-failures/assertion.vh)

Its first case expects `6` from `2.plus(3)`. The report shows one failed case
and one passed case. Change the expected value to `5`, save and run again.
The [original report](examples/fixtures/assertion.out) makes the comparison easy.

The separate [runtime-error example](examples/intentional-failures/runtime-error.vh)
contains a hole, `?`, as unfinished code. Run it with
`../bin/vh test examples/intentional-failures/runtime-error.vh` to see one error
and a later passing case. The checker validates its failure kind and reason too.

<!-- example: intentional-failures/runtime-error.vh -->
```vh
class Tests(kernel, testing) {
    Testing = testing;

    tests {
        var suite = Testing.suite("Practice reading an error");
        suite.add("unfinished operation", fun(assert) {
            ?
        });
        suite.add("the next case still runs", fun(assert) {
            assert.assertEquals(4, 2.times(2))
        });
        suite
    }
}
```

[Download runtime-error.vh](examples/intentional-failures/runtime-error.vh)

[Next: Add a capability written in Java](07-java-capability.md)
