/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./src/pages/**/*.{js,jsx,ts,tsx}",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#00FFA5",
				secondary: "#003120",
			},
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				baskerville: ["Libre Baskerville"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
