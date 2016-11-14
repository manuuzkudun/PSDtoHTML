module.exports = {
  context: __dirname + "/src",
  entry: "./main.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/dist',
    filename: "bundle.js"
  }

}
