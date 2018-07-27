module.exports = {
  outputDir: "server/www",
  chainWebpack: config => {
    config.entry("app").add("babel-polyfill");
  },
  devServer: {
    port: 8812,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://localhost:8813",
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
};
