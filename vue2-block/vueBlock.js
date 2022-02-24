'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
class FooterPlugin {
  constructor(options) {
    if (typeof options === 'string' || typeof options === 'function') {
      options = {
        banner: options
      }
    }

    this.options = options
    console.log('options', options)
  }

  apply(compiler) {
    const htmlPlugin = {
      title: '测试',
      template: require.resolve('./index.html')
    }
    compiler.options.plugins.push(new HtmlWebpackPlugin(htmlPlugin))
    // 配置别名
    // compiler.options.resolve.alias['@block'] = './src/index.vue'
    compiler.options.resolve.alias['@block'] = `${process.cwd()}/src/index.vue`
    // 配置入口文件
    compiler.options.entry.app.map((item,index) => {
      if(item === './src/main.js'){
        compiler.options.entry.app[index] = require.resolve('./index.js')
      }
    })
  }
}

module.exports = FooterPlugin
