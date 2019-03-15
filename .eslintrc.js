module.exports = {
	root: true,
	env: {
		browser: true
	},
	extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		semi: [2, 'never'],
		'comma-dangle': 'off',
		'prettier/prettier': 'error',
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				closeBracket: 0,
				ignores: []
			}
		]
	},
	plugins: ['vue', 'prettier'],
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 11,
		sourceType: 'module'
	}
}
