import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1400px"
			}
		},
		extend: {
			animation: {
				float: "float 12s infinite linear",
				"float-fast": "float 10s infinite linear",
				"float-fastest": "float 8s infinite linear"
			},
			keyframes: {
				float: {
					"0%": {
						transform:
							" rotate(-0.001deg) translate3d(15px, 0, 0) rotate(-0.001deg)"
					},
					"100%": {
						transform:
							"rotate(360.001deg) translate3d(15px, 0, 0) rotate(-360.001deg)"
					}
				}
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			}
		}
	},
	plugins: [
		plugin(({ matchUtilities, theme }) => {
			matchUtilities(
				{
					"animation-delay": (value) => {
						return {
							"animation-delay": value
						};
					}
				},
				{
					values: theme("transitionDelay")
				}
			);
		})
	]
};
export default config;
