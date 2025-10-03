import { StyleSheet, Text, View, Pressable, ScrollView, FlatList, } from 'react-native'
import { Image } from "expo-image"
import React from 'react'
import { router } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Octicons from "@expo/vector-icons/Octicons"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import "react-native-gesture-handler"
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useNavigation, DrawerActions } from "@react-navigation/native";


export default function YourLibrary() {
    const playlist = [
        { id: 1, name: "Liked Songs"},
        { id: 2, name: "PlayList 1"},
        { id: 3, name: "PlayList 2"},
        { id: 4, name: "PlayList 3"},
        { id: 5, name: "PlayList 4"},
        { id: 6, name: "PlayList 5"},
        { id: 7, name: "PlayList 6"},
        { id: 8, name: "PlayList 7"},
    ]

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerBox}> 
                <View style={styles.headerbox1}>
                    <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <View style={styles.profilePic}>
                        <Image source={require("@/assets/images/gengar1.jpg")}
                            style={styles.profilePic}
                        />                        
                    </View>
                    </Pressable>
                <Text style={styles.hBox}>Your Library</Text>
                <View style={styles.iconsRight}>
                    <Pressable>
                    <Octicons name="search" size={28} color="white" />
                    </Pressable>
                    <Pressable>
                    <Octicons name="plus" size={28} color="white" />
                    </Pressable>
                </View>
                </View>
                <View style={styles.headerbox2}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Playlists</Text></View>
                    <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Podcast</Text></View>
                    <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Albums</Text></View>
                    <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Artist</Text></View>
                    <View style={styles.hBoxItem}><Text style={styles.hBoxText}>Downloads</Text></View>
                </ScrollView>
                </View>
            </View>
        <View style={styles.boxList}>
            <View style={styles.hBoxList}>
                <View style={styles.hBoxListLeft}>
                    <Pressable>
                    <FontAwesome name="unsorted" size={18} color="white" />
                    </Pressable>
                    <Text style={styles.hBoxListText}>Recents</Text>
                </View>
                <Pressable>
                    <MaterialCommunityIcons name="view-grid-outline" size={24} color="white" />
                </Pressable>
                </View>
            {/* <View style={styles.playLists}>
                <View style={styles.lists}></View>
                <View style={styles.lists}></View>
                <View style={styles.lists}></View>
                <View style={styles.lists}></View>
            </View> */}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 30,
        gap: 5,
    },
    headerBox: {
        flex: 1,
        backgroundColor: '#212121',
    },
    headerbox1: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        padding: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 25,
        marginRight: 15,
        },
    hBox: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        color: 'white',
    },
    iconsRight: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20, 
    },
    scrollContent: {
        paddingHorizontal: 10,
        gap: 5,
        alignItems: "center",
    },

    hBoxItem: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#595959', 
        borderRadius: 20,
    },
    hBoxText: {
        fontSize: 14,
        fontWeight: "500",
        color: "white",
    },
    boxList: {
        flex: 5,  
        backgroundColor: '#212121',
    },
    headerbox2: {
        flex: 1,
    },
    hBoxList: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", 
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    hBoxListLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10, 
    },
    hBoxListText: {
        fontSize: 14,
        fontWeight: "500",
        color: "white",
    },
    playLists: {
        flex: 10,
        backgroundColor: '#212121',
        padding: 10,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomColor: "#333",
        paddingLeft: 15,
    },
    listThumb: {
        width: 80,
        height: 80,
        backgroundColor: "blue", 
        marginRight: 15,
    },
    listText: {
        fontSize: 16,
        color: "white",
        fontWeight: "500",
    },
    listTextContainer: {
        flexDirection: "column", 
    },
    listSubText: {
        fontSize: 13,
        color: "#aaa",
    },


})