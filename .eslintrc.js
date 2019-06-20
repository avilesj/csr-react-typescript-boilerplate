module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': ['standard',"plugin:@typescript-eslint/recommended"],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  "parser": "@typescript-eslint/parser",
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'semi': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    "@typescript-eslint/semi": 2,
    "@typescript-eslint/indent": 2,
  }
}
