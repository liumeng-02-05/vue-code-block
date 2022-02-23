const VueBlock = require('vue3-block')
module.exports={
  publicPath: './',
  outputDir: 'dist2',
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