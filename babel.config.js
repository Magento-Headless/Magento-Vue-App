module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile-vue-next',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
}
