var webpack = require('webpack');
var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  debug: true,
  progress: true,
  colors: true,
  devServer: {
    port: 8081
  },
  devtool: 'source-map',
  entry: [
    'webpack/hot/dev-server',
    path.join(__dirname, '..', 'app', 'index.tsx')
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '..', 'build'),
    sourceMapFilename: '[name].[hash].map',
    publicPath: '/static/'
  },
  module: {
    preLoaders: [
      {test: /\.ts(x?)$/, loader: 'tslint', include: path.resolve(__dirname, '..', 'app')}
    ],
    loaders: [
      {test: /\.ts(x?)$/, loaders: ['babel', 'ts'], include: path.resolve(__dirname, '..', 'app')},
      {test: /\.css$/, loader: 'style-loader!css-loader', include: path.resolve(__dirname, '..', 'app')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolveLoader: {
    root: path.join(__dirname, '..', "node_modules")
  },
  resolve: {
    root: [path.resolve('..', 'app')],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  }
}
