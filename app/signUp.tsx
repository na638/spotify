import { StyleSheet, Text, View, TouchableOpacity, Pressable} from 'react-native'
import { Image } from "expo-image";
import React from 'react'
import { router } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function SignUp() {
    const buttonPress = () => {
        router.push("/")
    }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image 
          source={require("@/assets/images/Spotify_Full_Logo_RGB_Green.png")}
          style={styles.spotifyLogo}
        />
      </View>

      <View style={styles.box2}>
        {/* Input placeholders */}
        <View style={styles.Input}>
          <Text style={styles.text}>Email Address</Text>
        </View>
        <View style={styles.Input}>
          <Text style={styles.text}>Full Name</Text>
        </View>    
        <View style={styles.Input}>
          <Text style={styles.text}>Password</Text>
        </View>    

        <View style={styles.dobRow}>
          <Text style={styles.highlights}>Date of Birth</Text>
          <View style={styles.dobBox}><Text style={styles.text}>DD</Text></View>
          <View style={styles.dobBox}><Text style={styles.text}>MM</Text></View>
          <View style={styles.dobBox}><Text style={styles.text}>YY</Text></View>
        </View>

        <View style={styles.genderRow}>
          <TouchableOpacity style={styles.genderButton}>
            <View style={styles.circle} />
            <Text style={styles.highlights}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderButton}>
            <View style={styles.circle} />
            <Text style={styles.highlights}>Female</Text>
          </TouchableOpacity>
        </View>
          <Pressable>
            <View style={styles.signUpButton}>
              <Text style={styles.text}>Sign Up</Text>
            </View>        
          </Pressable> 
            <Text style={styles.highlights2}>Sign Up With</Text>          
            <View style={styles.box3_1}>
            <FontAwesome5 name="facebook" size={24} style={styles.Icon}/>
            <AntDesign name="google" size={24} style={styles.Icon}/>
            </View>
      </View>
          {}
      <View style={styles.box3}>
        <Text style={styles.text4}>
          Already have an account? 
          <Text style={styles.highlights} onPress={buttonPress}> Sign In</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    box1: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    box2: { 
        flex: 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    box3: { 
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    box3_1: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        top: 50,
    },
    spotifyLogo: {
        width: 220,
        height: 60,
        top: 50,
    },
    Input: {
        width: 270,
        height: 50,
        backgroundColor: '#171616',
        borderRadius: 15,    
        justifyContent: "center",
        paddingLeft: 10,
        top: 50,
    },
    text: {
        color: "white",
    },
    highlights: {
        color: '#1DB954',
        fontWeight: 'bold',
    },
    highlights2: {
        color: 'E3E3E3',
        fontWeight: 'bold',
        top: 50,
    },
    dobRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 10,
        top: 40,

    },
    dobBox: {
        width: 50,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#171616",
        alignItems: "center",
        justifyContent: "center",
    },
    genderRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginTop: 20,
        top: 20,
    },
    genderButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "#C7C3C3",
    },
    signUpButton: {
        width: 270,
        height: 50,
        backgroundColor: '#1DB954',
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        top: 50,
    },
    Icon: {
        color: 'white',
        padding: 15,
        bottom: 10,
    },
    text4: {
        color: '#D6D6D6',
        top: -50,
    }
})
