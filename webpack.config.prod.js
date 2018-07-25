// @flow
const webpack = require('webpack')
const {optimize} = webpack
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: `./src/entry.js`
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/site`,
    chunkFilename: '[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: [ 'style-loader', 'css-loader' ] },
      { test: /\.pug$/, loader: 'pug-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'views/index.pug',
      inject: true
    })
  ]
}
