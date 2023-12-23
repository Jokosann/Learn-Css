/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					from: {
						transform: "rotate(0deg)",
					},
					to: {
						transform: "rotate(-360deg)",
					},
				},
			},
			animation: {
				wiggle: "wiggle 1s linear infinite",
			},
			fontFamily: {
				inter: ["inter"],
			},
			spacing: {
				13: "3.25rem",
			},
			colors: {
				test: "#bada55",
			},
		},
	},
	plugins: [],
};
