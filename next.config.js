/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		API_URL: process.env.REACT_APP_API_URL,
		API_KEY: process.env.REACT_APP_API_KEY,
		API_IMAGE_URL: process.env.REACT_APP_API_IMAGE_URL,
	},
	images: {
		domains: ['localhost', 'image.tmdb.org'],
	},
}

module.exports = nextConfig
