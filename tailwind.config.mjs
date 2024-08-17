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
			backgroundImage: {
        'bullet-journal': 'radial-gradient(circle, #2c2c2c 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots': '1.5rem 1.5rem',
      },
    },
		
		colors: {
			...colors,
			gray: {
				900: '#121212',
				800: '#1a1a1a',
				100: '#888888',
				400: 'rgb(156 163 175)'
			},
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			mono: ['DM Mono', 'monospace'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
