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
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-0', 'react'],
        plugins: ['transform-react-jsx-source', 'transform-object-rest-spread', 'transform-class-properties'],
        cacheDirectory: true,
      },
    },
  },
];
console.log('NOTICE ME \n', merge(commonConfig, webpackProdConfig).module.rules[1].use.options);
module.exports = merge(commonConfig, webpackProdConfig);
