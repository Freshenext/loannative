module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react-hooks'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-debugger': 'off',
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'operator-linebreak': 'off',
        'object-curly-newline': 'off',
        'import/extensions': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'implicit-arrow-linebreak': 'off',
        'react/jsx-wrap-multilines': 'off',
        'linebreak-style' : 0
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
