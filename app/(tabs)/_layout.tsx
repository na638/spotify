import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import Home from "./home";
import Search from "./search";
import Library from "./yourLibrary";
import Create from "./create";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "black", height: 60 },
        tabBarActiveTintColor: "#1DB954",
        tabBarInactiveTintColor: "white",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          if (route.name === "home") iconName = "home";
          else if (route.name === "search") iconName = "search";
          else if (route.name === "library") iconName = "library";
          else if (route.name === "create") iconName = "add-circle-outline";

          if (route.name === "library") {
            return <MaterialIcons name="library-music" size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="home" component={Home} options={{ title: "Home" }} />
      <Tab.Screen name="search" component={Search} options={{ title: "Search" }} />
      <Tab.Screen name="library" component={Library} options={{ title: "Library" }} />
      <Tab.Screen name="create" component={Create} options={{ title: "Create" }} />
      {/* Hidden tab, navigated via Drawer */}
      <Tab.Screen name="profile" component={Profile} options={{ tabBarButton: () => null }} />
    </Tab.Navigator>
  );
}