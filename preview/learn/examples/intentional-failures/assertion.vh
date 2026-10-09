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
