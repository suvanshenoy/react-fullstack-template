import "../../packages/react-electron-vite-src/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "../../packages/react-electron-vite-src/app";

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
