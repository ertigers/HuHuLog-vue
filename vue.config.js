/* eslint-disable */
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/HuHuLog-vue-website/'
  : '/',
  lintOnSave: false,
  chainWebpack:config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(dir).end()  // 包含icons目录
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract:false}).end()
      // .use('svgo-loader').loader('svgo-loader')
      // .tap(options=>({...options, plugins:[{removeAttrs:{attrs:'fill'}}]})).end()  // 去除svg自带颜色的影响
      //   .tap(options=>({     // 这是另一种尝试
      //     ...options,
      //     plugins: [
      //       { removeNonInheritableGroupAttrs: true },
      //       { collapseGroups: true },
      //      { removeAttrs: { attrs: '(fill|stroke)' } },
      //    ],
      //  })).end()

    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)
  }
}
