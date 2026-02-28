const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./force-app/main/default/**/*.{html,js}"],
	safelist: [
		"bg-dark",
		"text-light",
		"bg-primary",
		"bg-primaryDark",
		"text-primary",
		"text-primaryDark",
		"spin-slow"
	],
	theme: {
		extend: {
			fontFamily: {
				mont: ["var(--font-mont)", fontFamily.sans]
			},
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63E96", // 240,86,199
				primaryDark: "#58E6D9" // 80,230,217
			},
			animation: {
				"spin-slow": "spin 8s linear infinite"
			},
			backgroundImage: {
				circularLight:
					"repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px)"
			}
		}
	},
	plugins: [],
	darkMode: "class"
};
