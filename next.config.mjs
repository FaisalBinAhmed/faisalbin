/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		PROJECT_ID: process.env.PROJECT_ID
	},
	images: {
		domains: ["raw.githubusercontent.com"]
	}
};

export default nextConfig;
