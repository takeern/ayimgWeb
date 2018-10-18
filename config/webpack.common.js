const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const resolve = dir => path.join(__dirname, '../', dir)

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src', 'index.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'development',
      inject: 'body',
      compile: true,
      favicon: false,
      minify:{ 
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true, 
      },
      cache: true,
      showErrors: true,
      chunks: 'all',
      excludeChunks: [],
      chunksSortMode: 'auto',
      template: path.resolve(__dirname, '../src', 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
}
