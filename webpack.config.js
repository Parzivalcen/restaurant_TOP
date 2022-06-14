const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    static:'./dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Tatarendygui',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization:{
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
    ],
  },
};