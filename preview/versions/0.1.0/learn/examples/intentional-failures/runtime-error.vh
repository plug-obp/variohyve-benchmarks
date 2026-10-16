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
