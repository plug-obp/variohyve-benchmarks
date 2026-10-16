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
