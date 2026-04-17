import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
	appId: "com.example.app",
	appName: "@apps/react-ionic-vite",
	webDir: "../../apps/react-ionic-vite/dist",
	android: {
		path: "./android",
	},
};

export default config;
