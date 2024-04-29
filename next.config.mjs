/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		LAST_DEPLOYED_TIME: process.env.LAST_DEPLOYED_TIME
	}
};

export default nextConfig;
