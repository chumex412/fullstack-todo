const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
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
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: "app.bundle.js"
  },
  devServer: {
    port: '3000',
    static: path.join(__dirname, './public/'),
    //publicPath: 'https://localhost:3000/build/',
    hot: true,
    compress: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}