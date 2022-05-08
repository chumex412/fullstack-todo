const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/',
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {presets: ['@babel/preset-env']}
      },
      {
        test: /\.css$/,
        use: ['css-loader', 'style-loader', 'sass-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000'
      }
    },
    static: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    //compress: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      inject: true
    })
  ]
}