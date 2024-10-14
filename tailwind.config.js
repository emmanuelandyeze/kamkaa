module.exports = {
	content: [
		'./app/**/*.{js,jsx}',
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				kamkaaGold: '#F7CA55',
			},
			fontFamily: {
				playfair: ['Playfair Display', 'serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
