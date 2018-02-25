var StatsPlugin = require("stats-webpack-plugin");

module.exports = [
  {
    entry: { bs: "./src/bs.js" },
    output: {
      path: __dirname + "/dist/",
    },
    profile: true,
    mode: "production",
    plugins: [
      new StatsPlugin("bs.json", {
        chunkModules: true,
      }),
    ],
  },
  {
    entry: { "base-line": "./src/base-line.js" },
    output: {
      path: __dirname + "/dist/",
    },
    profile: true,
    mode: "production",
    plugins: [
      new StatsPlugin("base-line.json", {
        chunkModules: true,
      }),
    ],
  },
];
