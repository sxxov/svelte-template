module.exports = {
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
            rules: {
                '@typescript-eslint': ['off'],
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {},
    env: {
        'node': true,
        'browser': true,
    },
    rules: {
        'no-param-reassign': ['off'],
        'import/no-unresolved': ['off'],
        'lines-between-class-members': ['off'],
        'no-multiple-empty-lines': ['warn', { max: 2 }],
        'no-unused-vars': ['warn'],
        'import/no-mutable-exports': ['off'],
        'import/first': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-use-before-define': ['off'],
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-this-alias': ['off'],
    },
    plugins: [
        'svelte3',
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        // 'plugin:eslint-comments/recommended',
        'plugin:@typescript-eslint/recommended',
    ],

}

// module.exports = {
//     // root: true,
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//         'sourceType': 'module',
//         // 'tsconfigRootDir': __dirname,
//         'project': ['./tsconfig.json'],
//     },
//     env: {
//         'node': true,
//         'browser': true,
//     },
//     rules: {
//         'import/no-unresolved': ['off'],
//         'lines-between-class-members': ['off'],
//         'no-multiple-empty-lines': ['warn', { max: 2 }],
//         '@typescript-eslint/no-empty-function': ['off'],
//         '@typescript-eslint/no-use-before-define': ['off'],
//         '@typescript-eslint/no-explicit-any': ['off'],
//         '@typescript-eslint/no-this-alias': ['off'],
//     },
//     plugins: ['@typescript-eslint', 'svelte3'],
//     extends: [
//         'eslint:recommended',
//         // 'airbnb-typescript',
//         'plugin:@typescript-eslint/recommended',
//         // 'plugin:eslint-comments/recommended',
//     ],
//     overrides: [
//         {
//             files: ['**/*.svelte'],
//             processor: 'svelte3/svelte3',
//         },
//     ],
// };