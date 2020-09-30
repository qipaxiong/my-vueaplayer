/*
 * @Description:
 * @Version: 0.1
 * @Autor: 黄鹏举
 * @Date: 2020-09-26 23:25:04
 * @LastEditors: Seven
 * @LastEditTime: 2020-10-01 01:32:14
 */
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    sourceMap: false,
    extract: false, // 不构建单独的css文件
    modules: false
  },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
    // proxy: {
    //   '/supervise': {
    //     target: `http://192.168.0.111:8080`, // 这个链接是要代理到的api地址
    //     //timeout: '6*60*1000',
    //     //ws: true,        //如果要代理 websockets，配置这个参数
    //     //secure: false,  // 如果是https接口，需要配置这个参数
    //     //changeOrigin: true,  //是否跨域
    //     pathRewrite: {
    //       '/supervise': ''
    //     }
    //   }
    // }
  }
}
