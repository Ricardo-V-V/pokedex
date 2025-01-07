import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
	{ ignores: ['dist'] },
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: { react: { version: '18.3' } },
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react/jsx-no-target-blank': 'off',
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			semi: ['error', 'never'],
			'linebreak-style': 0,
			indent: [
				'error',
				'tab',
				{ ignoredNodes: ['TemplateLiteral', 'SwitchCase'] },
			],
			'import/no-extraneous-dependencies': 0,
			'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
			'react/prop-types': 0,
			'arrow-spacing': ['error', { before: true, after: true }],
			'no-trailing-spaces': ['error', { ignoreComments: true }],
		},
	},
]
