/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	headers: async () => {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: "*",
					},
					{
						"key": "Access-Control-Allow-Methods",
						"value": "GET, POST, PUT, DELETE, OPTIONS"
					},
				],
			},
		];
	},
};

export default nextConfig;
