import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { router } from "expo-router";
import React from "react";

export default function Index() {
  const buttonPress = () => {
    router.push("/signUp");
  }
  const buttonPress2 = () => {
    router.push("/(tabs)/home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image 
          source={require("@/assets/images/Spotify_Primary_Logo_RGB_Green.png")}
          style={styles.SpotifyLogo}
        />
        <Text style={styles.AppName}>Spotify</Text>
      </View>
      <View style={styles.box2}>
        <View style={styles.Input}>
          <Text style={styles.text2}>Username</Text>
        </View>
        <View style={styles.Input}>
          <Text style={styles.text2}>Password</Text>
        </View>
        <Text style={styles.FGtext}>Forgot Password?</Text>
          <Pressable onPress={buttonPress2}>
            <View style={styles.signInButton}>
              <Text style={styles.signInText}>Sign In</Text>
            </View>
          </Pressable>
          <Text style={styles.FGtext2}>Connect With:</Text>
      </View>
      <View style={styles.box3}>
        <View style={styles.box3_1}>
          <FontAwesome5 name="facebook" size={24} style={styles.Icon}/>
          <AntDesign name="google" size={24} style={styles.Icon}/>
        </View>
        <Text style={styles.text3}>
          Don't have an account? 
          <Text style={styles.signUp} onPress={buttonPress}> Sign Up</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 2,
    width: "100%",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  SpotifyLogo: {
    height: 150,
    width: 150,
  },
  AppName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  box2: {
    flex: 3,
    paddingTop: 40,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  Input: {
    width: 270,
    height: 50,
    backgroundColor: '#171616',
    borderRadius: 15,
  },
  box3: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box3_1: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  text2: {
    color: '#3D3D3D',
    fontSize: 13,
    padding: 10,
    fontWeight: 'bold',
  },
  text3: {
    color: '#3D3D3D',
    fontSize: 13,
    fontWeight: 'bold',
    bottom: 10,
  },
  FGtext: {
    color: '#807E7E',
    fontSize: 10,
    right: -80
  },
  signInButton: {
    backgroundColor: "#1DB954",
    height: 50,
    width: 270,
    borderRadius: 25,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    color: '#F2EBEB',
    fontSize: 15,
    fontWeight: 'bold',
  },
  FGtext2: {
    color: 'white',
    fontSize: 12,
    top: 80,
  },
  Icon: {
    color: 'white',
    padding: 15,
    bottom: 20,
  },
  signUp: {
  color: '#1DB954',
  fontWeight: 'bold',
}
  
})