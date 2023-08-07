/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				openSans: ['Open Sans', 'sans-serif'],
				tillium: ['Tillium Web', 'sans-serif'],
				libre: ['Libre Baskerville', 'serif']
			}
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['night']
	}
};
