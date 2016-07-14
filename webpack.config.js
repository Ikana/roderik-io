var webpack = require('webpack');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: "./page/scripts/entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    externals: { jquery: "jQuery" } ,
    devtool: 'source-map',
    module: {
     loaders: [
      { test: /\.js$/,
        loader: 'babel',
        query: { presets: [ 'es2015' , 'stage-1'] },
        exclude: /node_modules/
      },
    ]},
    plugins: PROD ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false }
      })
    ] : []
};
