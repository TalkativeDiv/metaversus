module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': 0,
    'arrow-body-style': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-indent': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/self-closing-comp': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'react/prop-types': 0,
  },
};
