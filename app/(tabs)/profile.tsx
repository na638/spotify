import { StyleSheet, Text, View, Pressable, FlatList, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { router } from "expo-router";
const { height } = Dimensions.get('window');
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Profile() {
  const playlist = [
    { id: 1, name: "PlayList 0" },
    { id: 2, name: "PlayList 1" },
    { id: 3, name: "PlayList 2" },
    { id: 4, name: "PlayList 3" },
    { id: 5, name: "PlayList 4" },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(20, 224, 242, 0.45)', 'transparent']}
        style={styles.background}
      />

      <View style={styles.box1}>
        <Pressable onPress={() => router.push("/(tabs)/yourLibrary")}>
          <Ionicons name="chevron-back" size={32} color="white" />
        </Pressable>

        <View style={styles.profileRow}>
          <View style={styles.profileIcon} > 
            <Image source={require("@/assets/images/gengar1.jpg")}
              style={styles.profileIcon}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.username}>User's Username</Text>
            <Text style={styles.followers}>
              <Text style={styles.boldNumber}>512</Text> Followers •{" "}
              <Text style={styles.boldNumber}>1024</Text> Following
            </Text>
          </View>
        </View>

        <View style={styles.actionRow}>
          <Pressable>
            <View style={styles.editProfile}>
              <Text style={{ color: "white", textAlign: "center" }}>Edit</Text>
            </View>
          </Pressable>
          <Pressable style={styles.dots}>
            <MaterialCommunityIcons name="dots-vertical" size={28} color="white" />
          </Pressable>
        </View>
      </View>

      <View style={styles.box2}>
        <Text style={styles.sectionTitle}>Playlists</Text>

        <FlatList
          data={playlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable style={styles.listItem}>
              <View style={styles.listThumb}>
                <Image source={require("@/assets/images/duck.jpg")}
                  style={styles.listThumb}
                />
              </View>
              <View style={styles.listTextContainer}>
                <Text style={styles.listText}>{item.name}</Text>
                <Text style={styles.listSubText}>Playlist • User</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'black',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height * 0.5,
  },
  box1: {
    flex: 1,
    padding: 10,
  },
  profileIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'green',
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
  },
  profileInfo: {
    marginLeft: 15,
  },
  username: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  followers: {
    color: "#B3B3B3",
    fontSize: 13,
    marginTop: 4,
  },
  boldNumber: {
    fontWeight: "bold",
    color: "white",
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
    marginLeft: 15,
  },
  editProfile: {
    width: 60,
    height: 35,
    borderRadius: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    marginRight: 10,
  },
  dots: {
    justifyContent: "center",
  },
  box2: {
    flex: 1.5,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  listThumb: {
    width: 80,
    height: 80,
    backgroundColor: "blue",
    marginRight: 15,
  },
  listTextContainer: {
    flexDirection: "column",
  },
  listText: {
    fontSize: 16,
    color: "white",
    fontWeight: "500",
  },
  listSubText: {
    fontSize: 13,
    color: "#aaa",
  },
});