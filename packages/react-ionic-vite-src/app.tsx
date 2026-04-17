import { IonApp, setupIonicReact } from "@ionic/react";
import * as Pages from "./pages";

setupIonicReact();

export function App() {
	return (
		<IonApp>
			<Pages.HomePage />
		</IonApp>
	);
}
