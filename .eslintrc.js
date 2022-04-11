module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  rules: {
    'import/order': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/no-unused-prop-types': 'off',
    'prefer-destructuring': 'off',
    'global-require': 'off',
    'react-native/no-inline-styles': 'off',
    'react/style-prop-object': 'off',
    'no-param-reassign': 'off',
  },
  ignorePatterns: ['*.js', '*generated*'],
}
