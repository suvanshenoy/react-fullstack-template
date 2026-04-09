import * as IonicReact from "@ionic/react";
import * as Pages from "./pages";

IonicReact.setupIonicReact({ mode: "md" });

export default function App() {
	return (
		<IonicReact.IonApp>
			<Pages.HomePage />
		</IonicReact.IonApp>
	);
}
