const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  /** vue3.0内置了webpack所有东西，
  * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  **/
  chainWebpack: (config) => {},
  configureWebpack: (config) => {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    requireModuleExtension: true
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {},
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
})
