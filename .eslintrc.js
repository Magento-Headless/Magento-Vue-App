module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    semi: ['error', 'never'],
    // camelcase: 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     semi: false,
    //     singleQuote: true,
    //     usePrettierrc: false,
    //     trailingCommas: 'none',
    //     fileInfoOptions: {
    //       withNodeModules: true
    //     }
    //   }
    // ]
  },
}
