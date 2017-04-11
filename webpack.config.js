const path = require('path');

console.log(__dirname)
module.exports = {
  context: __dirname,
  entry: path.resolve(__dirname, 'src/app.js'),
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extenstions: ['', '.js'],
    alias: {
      styles: path.resolve(__dirname, 'styles'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  stats: {
    color: true,
    reasonse: true,
    chunkd: true,
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'eslint-loader',
    }],
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        // plugins: ['transform-runtime'],
      },
    }, { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ],
  },
};