const { defineConfig } = require('@vue/cli-service')

const SystemConfig = require('./config/system.conf')

const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = defineConfig({
  productionSourceMap: false,
  transpileDependencies: true,
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          math: 'always',
          modifyVars: SystemConfig.antd.variables,
          javascriptEnabled: true,
        },
      },
    },
  },
})
