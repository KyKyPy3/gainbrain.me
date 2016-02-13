var webpack = require('webpack');ck = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, '..', 'app', 'index.tsx')
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/static/'
  },
  module: {
    preLoaders: [
      {test: /\.ts(x?)$/, loader: 'tslint', include: path.resolve(__dirname, '..', 'app')}
    ],
    loaders: [
      {test: /\.ts(x?)$/, loaders: ['babel', 'ts'], include: path.resolve(__dirname, '..', 'app')}
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  resolve: {
    root: [path.resolve('..', 'app')],
    extensions: ['', '.jsx', '.js', '.tsx', '.ts']
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
}
