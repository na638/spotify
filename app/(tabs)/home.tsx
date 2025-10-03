import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

export default function Home() {
  // Tell TS this is a Drawer navigator
  const navigation = useNavigation<DrawerNavigationProp<any>>()

  return (
    <View style={styles.container}>
      {/* Drawer Button */}
      <Pressable onPress={() => navigation.openDrawer()} style={styles.menuButton}>
        <Text style={styles.menuText}>☰</Text>
      </Pressable>

      {/* Your original Home text */}
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  menuText: {
    color: 'white',
    fontSize: 24,
  },
})
