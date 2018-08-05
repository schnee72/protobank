/* eslint-disable no-undef */
import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export default {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html')
    })
  ]
};
