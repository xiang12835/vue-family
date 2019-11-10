// vue.config.js
module.exports = {
  // 选项...
  css: {
    loaderOptions: {
      less: {
        // 这里的选项会传递给 css-loader
        javascriptEnabled: true
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  }
};
