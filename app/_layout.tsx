// app/_layout.js
import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // ✅ expo-router navigation

// Custom drawer content with profile header
function CustomDrawerContent(props) {
  const router = useRouter();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: "#121212" }}
    >
      {/* Profile header (navigates to profile screen inside tabs) */}
      <Pressable
        style={styles.header}
        onPress={() => router.push("/(tabs)/profile")} // ✅ correct path
      >
        <Image
          source={require("@/assets/images/gengar1.jpg")} // replace with your image
          style={styles.profilePic}
        />
        <Text style={styles.username}>John Doe</Text>
      </Pressable>

      {/* Drawer items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#1DB954", // Spotify green
        drawerInactiveTintColor: "white",
        drawerStyle: { backgroundColor: "#121212" },
      }}
    >
      {/* Tabs group */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* Settings */}
      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#181818",
    marginBottom: 10,
    alignItems: "center",
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  username: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


