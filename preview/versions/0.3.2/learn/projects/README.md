# Recipe lesson files

[Lesson 9](../09-worlds.md) displays and links these exact copies of the shipping
recipe-project files:

- [Main.vh](recipe-project/Main.vh): application behavior.
- [World.vh](recipe-project/World.vh): native construction and development entries.
- [Tests.vh](recipe-project/Tests.vh) and [SuiteReporter.vh](recipe-project/SuiteReporter.vh): assertions and native reporting.
- [Main.vh.launch.json](recipe-project/Main.vh.launch.json): editor and command-line launch configuration.
- [Package.vh](recipe-project/Package.vh): production inventory and entry.
- [.variohyve-project](recipe-project/.variohyve-project): the editor's project marker.

Create the working project from the installed tools or **New Recipe Project**
first. These individual downloads replace its editable files; they do not include
the SUnit library or packaged console and value-adapter JARs. The independent
[native multiplier package](../packages/multiplier/README.md) supplies the
project's `packages/multiplier` dependency.

[Lesson 10](../10-native-packages.md) supplies complete alternative
[World.vh](alien-project/World.vh) and [Package.vh](alien-project/Package.vh) files
for the custom Alien exercise. Copy them under those same names in the existing
project after building the provider described by the lesson. The application,
tests and launch sidecar stay unchanged.

These recipe files are separate from the [starter examples](../examples/README.md),
which use the earlier lessons' JavaHostKernel. Source checks compare the complete
lesson blocks with these downloads and the recipe copies with the shipping
project. The archive journey tests their installed counterparts outside the
checkout.
