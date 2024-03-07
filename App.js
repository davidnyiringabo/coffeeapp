import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { useCallback } from "react";
import {
  HomeScreen,
  SettingsScreen,
  PriceScreen,
  PortfolioScreen,
  TransactionsScreen,
} from "./src/screens";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// const Tab = createBottom
export default function App() {
  const [fontsLoaded, fontError] = Font.useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Text style={{ fontFamily: "Poppins-Black" }}>Welcome to Rangurura!</Text>
    </>
  );
}
