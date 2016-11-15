module.exports = {
  context: __dirname + "/src",
  entry: "./main.js",
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(otf|jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }

}
