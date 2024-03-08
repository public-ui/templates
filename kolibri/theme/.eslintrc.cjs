module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint'],
	rules: {
		/**
		 * Import types with `import type` instead of `import`.
		 */
		'@typescript-eslint/consistent-type-imports': 'warn',
	},
};
