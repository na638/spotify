import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { router } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Settings = () => {
    const buttonPress = () => {
      router.push("/(tabs)/yourLibrary");
    }
    const logoutButton = () => {
      router.push("/");
    }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={buttonPress}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>
        <Text style={styles.title}>Settings</Text>
        <Pressable>       
          <FontAwesome name="search" size={22} color="white" />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Pressable style={styles.item}>
          <MaterialCommunityIcons name="account-circle-outline" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Account</Text>
            <Text style={styles.itemSubtitle}>Username • Close account</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name="music-note-half" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Content and display</Text>
            <Text style={styles.itemSubtitle}>Canvas • App language</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <AntDesign name="sound" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Playback</Text>
            <Text style={styles.itemSubtitle}>Gapless playback • Autoplay</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <Feather name="lock" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Privacy and social</Text>
            <Text style={styles.itemSubtitle}>Private session • Public playlists</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <Ionicons name="notifications-outline" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Notifications</Text>
            <Text style={styles.itemSubtitle}>Push • Email</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialIcons name="computer" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Apps and devices</Text>
            <Text style={styles.itemSubtitle}>Google Maps • Spotify Connect control</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <MaterialCommunityIcons name="download-circle-outline" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Data-saving and offline</Text>
            <Text style={styles.itemSubtitle}>Data saver • Offline mode</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <Foundation name="graph-bar" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>Media quality</Text>
            <Text style={styles.itemSubtitle}>Wi-Fi streaming • Cellular streaming</Text>
          </View>
        </Pressable>

        <Pressable style={styles.item}>
          <AntDesign name="exclamationcircleo" size={26} color="white" />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>About and support</Text>
            <Text style={styles.itemSubtitle}>Version • Privacy Policy</Text>
          </View>
        </Pressable>

        <Pressable style={styles.logoutButton} onPress={logoutButton}>
          <Text style={styles.logoutText}>Log out</Text>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#121212', 
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2a2a2a',
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
  scrollContent: {
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2a2a2a',
  },
  itemText: {
    marginLeft: 15,
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  itemSubtitle: {
    fontSize: 13,
    color: '#b3b3b3',
    marginTop: 2,
  },
  logoutButton: {
    marginTop: 40,
    marginHorizontal: 120,
    backgroundColor: 'white', 
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  logoutText: {
    color: 'block',
    fontSize: 16,
    fontWeight: '700',
  },
})