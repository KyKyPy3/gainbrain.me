var webpack = require('webpack');
var path    = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    vendors: [
      'react',
      'react-dom'
    ],
    app: [
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, '..', 'app', 'index.tsx')
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '..', 'build'),
    sourceMapFilename: '[name].[hash].map',
    chunkFilename: "[id].js",
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {test: /\.ts(x?)$/, loader: 'tslint', include: path.resolve(__dirname, '..', 'app')}
    ],
    loaders: [
      {test: /\.ts(x?)$/, loaders: ['babel', 'ts'], include: path.resolve(__dirname, '..', 'app')},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize'), include: path.resolve(__dirname, '..', 'app')},
      {test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, loader: 'url?limit=50000'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors_[hash].js'),
    new ExtractTextPlugin('[name].css', { allChunks: true   }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('../app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts', '.css']
  }
}
