const config = {
    entry: "./src/transaction.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    mode: "development"
  };
  module.exports = config;