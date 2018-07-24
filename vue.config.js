module.exports = {
  outputDir: "server/www",
  chainWebpack: config => {
    config.entry('app').add('babel-polyfill');
  },
  devServer: {
    port: 8803
  }
};
