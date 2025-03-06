module.exports = {
	theme: {
		extend: {
			colors: {
				"card": "oklch(var(--card) / <alpha-value>)",
			  },
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
	},
	daisyui: {
		themes: [
			{
				normal: {
					"primary": "#0000ff",
					"secondary": "#00a300",
					"accent": "#00bdff",
					"neutral": "#0c0400",
					"base-75": "#fff4f3",
					"base-100": "#ffddb8",
					"info": "#00d2ea",
					"success": "#5fb500",
					"warning": "#9f4f00",
					"error": "#f6486e",
					"title":"#eab676",
					"--background": "var(--base-75)",
					"--card": "100% 0 0",
					"--primary-muted": "65% 0.2 295", 
				},
				dark: {
					"primary": "#0000ff",
					"secondary": "#00a300",
					"accent": "#00bdff",
					"neutral": "#0c0400",
					"base-75": "#fff4f3",
					"base-100": "#ffddb8",
					"info": "#00d2ea",
					"success": "#5fb500",
					"warning": "#9f4f00",
					"error": "#f6486e",
					"title":"#eab676",
					"--background": "var(--base-75)",
					"--card": "100% 0 0",
					"--primary-muted": "65% 0.2 295", 
				},
			},
		],
	},
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	plugins: [require("@tailwindcss/typography"), require('daisyui')],
};
