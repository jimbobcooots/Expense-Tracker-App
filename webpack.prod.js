const merge = require('webpack-merge');
const MiniCssPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.common');

console.log('common Config: \n!!!!!!!!!!!!!!!!!!!!\n', commonConfig.module.rules[1].use.options);


const webpackProdConfig = {};
webpackProdConfig.module = {};
webpackProdConfig.mode = 'production';

webpackProdConfig.plugins = [
  new MiniCssPlugin({
    filename: '[name].[hash].css',
  }),
];

webpackProdConfig.module.rules = [
  {
    test: /\.scss$/,
    use: [
      MiniCssPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
];
console.log('NOTICE ME \n', merge(commonConfig, webpackProdConfig));
module.exports = merge(commonConfig, webpackProdConfig);
