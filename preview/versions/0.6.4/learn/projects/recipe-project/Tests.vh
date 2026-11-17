class Tests[application, testing] {
    application = application;
    testing = testing;
    pub tests {
        let suite = testing.suite("My application");
        suite.add("supplied multiplier", fun(assert) { assert.assertEquals(42, application.answer) });
        suite
    }
}
