import NotificationsScreen from "./src/screens/Notifications";
import HomeScreen from "./src/screens/Home";
import FavoritesScreen from "./src/screens/Favorites";
import CartScreen from "./src/screens/Cart";
import SettingsScreen from "./src/screens/Settings";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, Fontisto } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();
export {
  NotificationsScreen,
  HomeScreen,
  FavoritesScreen,
  CartScreen,
  SettingsScreen,
};

const AppNavigation = ()=>{
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

  return(
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
}

export default AppNavigation