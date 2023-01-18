const webpackConfig = require('./webpack.config.base')

module.exports = {
...webpackConfig,
mode: 'development',
devtool: 'source-map',
  devServer: {
    port: 9000,
    hot: true,
    client: {
      overlay: false,
    },
    historyApiFallback: true
  }
};
