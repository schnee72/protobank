/* eslint-disable no-undef */
import path from 'path';
import webpackConfig from './webpack.config.babel';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

process.env.NODE_ENV = 'production';

const destination = path.resolve(__dirname, 'dist');

const config = {
  ...webpackConfig,
  mode: process.env.NODE_ENV,
  output: {
    path: destination,
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};

config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].[chunkhash].css',
  chunkFilename: '[id].[chunkhash].css'
}));

config.plugins.push(new CopyWebpackPlugin([
  {
    from: path.join(__dirname, './public/web.config'),
    to: destination
  }
]));

export default config;
