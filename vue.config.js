const { defineConfig } = require('@vue/cli-service')
const PostcssPxToViewport = require('postcss-px-to-viewport')

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
          javascriptEnabled: true,
        },
      },
      postcss: {
        postcssOptions: {
          plugins: [
            new PostcssPxToViewport({
              viewportWidth: 375, // (Number) The width of the viewport.
              viewportUnit: 'vw', // (String) Expected units.
              unitPrecision: 4, // (Number) The decimal numbers to allow the REM units to grow to.
              selectorBlackList: ['.ignore', '.hairlines', 'node_modules'], // (Array) The selectors to ignore and leave as px.
              minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
              mediaQuery: true, // (Boolean) Allow px to be converted in media queries.
              propList: ['*', '!border'],
              fontViewportUnit: 'vw',
              replace: true,
              exclude: [],
              landscape: false,
            }),
          ],
        },
      },
    },
  },
})
