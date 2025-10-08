import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CustomDrawerContent(props) {
  const { navigation } = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ flex: 1, backgroundColor: "#121212" }}
    >
      {/* Profile Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("(tabs)", { screen: "profile" })}
      >
        <Image
          source={require("@/assets/images/gengar1.jpg")}
          style={styles.profilePic}
        />
        <Text style={styles.username}>Your Username</Text>
        <Text style={styles.viewProfile}>View profile</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Add Account */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => console.log("Add account tapped")}
      >
        <Ionicons name="add-circle-outline" size={22} color="white" />
        <Text style={styles.itemText}>Add account</Text>
      </TouchableOpacity>

      {/* What’s New */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => console.log("What’s new tapped")}
      >
        <Ionicons name="flash-outline" size={22} color="white" />
        <Text style={styles.itemText}>What’s new</Text>
      </TouchableOpacity>

      {/* Recents */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => console.log("Recents tapped")}
      >
        <Ionicons name="time-outline" size={22} color="white" />
        <Text style={styles.itemText}>Recents</Text>
      </TouchableOpacity>

      {/* Settings */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("settings")}
      >
        {/* ✅ FIXED TO A PROPER COG ICON */}
        <Ionicons name="settings-outline" size={22} color="white" />
        <Text style={styles.itemText}>Settings and privacy</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: "#121212" },
      }}
    >
      {/* Tabs group */}
      <Drawer.Screen
        name="(tabs)"
        options={{ drawerItemStyle: { display: "none" } }}
      />

      {/* Settings page */}
      <Drawer.Screen
        name="settings"
        options={{ drawerItemStyle: { display: "none" } }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#181818",
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
  viewProfile: {
    color: "#b3b3b3",
    fontSize: 14,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  itemText: {
    color: "white",
    fontSize: 15,
    marginLeft: 15,
  },
});
