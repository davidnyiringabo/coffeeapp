import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NotificationsScreen,
  SettingsScreen,
  FavoritesScreen,
  HomeScreen,
  CartScreen,
} from "./src/screens";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

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

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyles: {
      position: "absolute",
      bottom: "10%",
      width: "100%",
      height: 20,
      backgroundColor: "white",
      elevation: 0,
      right: 0,
      left: 0,
    },
  };
  return (
    <NavigationContainer screenOptions={screenOptions}>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "blue" : "black"}
                />
              </View>
            ),
            tabBarShowLabel: false
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Ionicons
                  name="heart"
                  size={24}
                  color={focused ? "blue" : "black"}
                />
              </View>
            ),
            tabBarShowLabel: false
          }}
          name="Favorites"
          component={FavoritesScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Fontisto name="shopping-bag" size={22} color={focused ? "blue" : "black"} />
              </View>
            ),
            tabBarShowLabel: false
          }}
          name="Cart"
          component={CartScreen}
        />
        <Tab.Screen
                  options={{
                    tabBarIcon: ({ focused }) => (
                      <View>
                        <Ionicons name="notifications" size={28} color={focused ? "blue" : "black"} />
                      </View>
                    ),
            tabBarShowLabel: false
                  }}
         name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
