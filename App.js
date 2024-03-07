import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { useCallback } from "react";
import {
  NotificationsScreen,
  SettingsScreen,
  FavoritesScreen,
  HomeScreen,
  CartScreen
} from "./src/screens"
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
      <HomeScreen/>
    </>
  );
}
