// This ordinary native module owns the deployment inventory and launch policy.
class Package(sources, tools, importModule, output) {
    sources = sources;
    tools = tools;
    output = output;
    runtimeSource = tools.capture("native/RuntimeIngredients.vh");
    runtime = importModule(tools.source(runtimeSource), tools, output);
    source(path) { output.source(path, sources.capture(path)) }
    build {
        output.runtime("native/RuntimeIngredients.vh", runtimeSource);
        runtime.write;
        source("Main.vh");
        source("World.vh");
        output.alien("aliens/starter-values", sources.alien("aliens/starter-values"));
        output.alien("aliens/console", sources.alien("aliens/console"));
        output.alien("aliens/multiplier", sources.alien("aliens/multiplier"));
        output.startup("aliens/starter-values", "host-values", "stdio", "discard");
        output.launch("World.vh", "run");
        output.finish()
    }
}
