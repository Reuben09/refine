const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

module.exports = {
    preset: "ts-jest",
    rootDir: "./",
    name: "refine-cli",
    displayName: "refine-cli",
    setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
    testEnvironment: "node",
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
    modulePaths: ["<rootDir>", "src"],
    moduleDirectories: ["node_modules", "src"],
};
