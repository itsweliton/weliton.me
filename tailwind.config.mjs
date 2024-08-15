/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      screens: {
        'mobile': {'max': '768px'},
        'desktop': {'min': '769px'},
      },
    },
		colors: {
			...colors,
			gray: {
				900: '#121212',
				800: '#1a1a1a',
				100: '#888888',
			},
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			mono: ['DM Mono', 'monospace'],
		},
	},
	plugins: [],
}
