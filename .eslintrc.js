module.exports = {
    ignorePatterns: [
        ".eslintrc.js"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 14,
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint",
    ],
}
