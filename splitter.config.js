const path = require("path");
const fableUtils = require("fable-utils");

const isProduction = process.argv.indexOf("-p") >= 0;
console.log("[Environment]: " + (isProduction ? "production" : "development"));

const outFile = resolve("dist/Main.js");
module.exports = {
  entry: resolve("src/Hedgehog.fable/Hedgehog.fable.fsproj"),
  outDir: path.dirname(outFile),
  babel: fableUtils.resolveBabelOptions({
    plugins: ["transform-es2015-modules-commonjs"]
  }),
  fable: { define: isProduction ? [] : ["DEBUG"], },
//   postbuild() { runScript(outFile) }
};

// UTILITIES -------------------------------------

function resolve(filePath) {
  return path.resolve(__dirname, filePath)
}

function runScript(scriptPath) {
  try {
      console.log("Running script")
      var childProcess = require("child_process");
      var path = require("path");
      var cp = childProcess.fork(scriptPath);
      cp.on("exit", function (code, signal) {
          if (code === 0) {
              console.log("Success");
          } else {
              console.log("Exit", { code: code, signal: signal });
          }
      });
      cp.on("error", console.error.bind(console));
  } catch (err) {
      console.error(err);
  }
}
