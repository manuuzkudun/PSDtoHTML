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
        // create working environment for es6
        // need to npm i babel-loader babel-core babel-preset-es2015 -D
        // https://github.com/babel/babel-loader
        test:/\.js$/,
        exclude:'/node_modules',
        loader:'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(otf|jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
        // take less convert to css and inject to style tag
        // need to: npm i css-loader less-loader less  style-loader -D
        // https://github.com/webpack/less-loader
        test:/\.less$/,
        exclude:'/node_modules',
        loader:"style!css!less"
      },
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }

}
