const webpackConfig = require('./webpack.config.base')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  ...webpackConfig,
  plugins: [
    ...webpackConfig.plugins,
    new CleanWebpackPlugin(),
  ]
};
