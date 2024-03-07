import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { useCallback, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NotificationsScreen,
  FavoritesScreen,
  HomeScreen,
  CartScreen,
} from "./src/screens";
import { Entypo, Ionicons, Fontisto } from "@expo/vector-icons";
import {Splash} from "./src/screens/Splash"


const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loading, setLoading] = useState(true);
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

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyles: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "30vh",
      backgroundColor: "#FFF",
      elevation: 0,
      right: 0,
      left: 0,
    },
  };

  return (
    loading ? (<Splash/>) : (
      <NavigationContainer>
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Entypo
                name="home"
                size={24}
                color={focused ? "#C67C4E" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name="heart"
                size={24}
                color={focused ? "#C67C4E" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Fontisto
                name="shopping-bag"
                size={22}
                color={focused ? "#C67C4E" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: 100,
                height: 100,
              }}
            >
              <Ionicons
                name="notifications"
                size={28}
                color={focused ? "#C67C4E" : "black"}
              />
              {/* {focused && <View style={{ width: 10, height: 5, backgroundColor: "#000" }}></View>} */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
    )
  );
}
