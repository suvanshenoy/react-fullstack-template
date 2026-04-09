module.exports = (api) => {
	api.cache(false);
	return {
		presets: ["module:@react-native/babel-preset"],
		plugins: [
			[
				"module-resolver",
				{
					root: "../../packages/mobile-src",
					extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
					alias: {
						"@packages/mobile-src": "../../packages/mobile-src",
					},
				},
			],
		],
	};
};
