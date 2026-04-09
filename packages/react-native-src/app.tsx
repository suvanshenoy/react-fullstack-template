import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Screens from "./screens/home-screen";

const RootStack = createNativeStackNavigator({
	screens: {
		Home: Screens.HomeScreen,
	},
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
	return <Navigation />;
}
