const VueBlock = require('vue2-block')

module.exports = {
  publicPath: '/',
  configureWebpack: config => {
    return {
      plugins: [
        new VueBlock({
          banner: '欢迎学习慕课网前端架构师课程'
        })
      ]
    }
  },
}