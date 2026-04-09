import "./global.css";

import App from "@packages/react-vite-src/app";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
