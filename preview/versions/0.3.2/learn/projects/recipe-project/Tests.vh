class Tests(application, testing) {
    application = application;
    testing = testing;
    tests {
        var suite = testing.suite("My application");
        suite.add("supplied multiplier", fun(assert) { assert.assertEquals(42, application.answer) });
        suite
    }
}
