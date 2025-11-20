import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";

export default function PlaylistScreen() {
  const [song, setSong] = useState("");
  const [playlist, setPlaylist] = useState<string[]>([]);

  const addSong = () => {
    if (song.trim() !== "") {
      setPlaylist([...playlist, song]);
      setSong("");
    }
  };

  const removeSong = (index: number) => {
    setPlaylist(playlist.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Playlist</Text>

      {/* Song Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter a song name"
        placeholderTextColor="#AAA"
        value={song}
        onChangeText={setSong}
      />

      {/* Add Song Button */}
      <TouchableOpacity style={styles.addButton} onPress={addSong}>
        <Text style={styles.addButtonText}>Add Song</Text>
      </TouchableOpacity>

      {/* Playlist Items */}
      <FlatList
        data={playlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.songItem}>
            <Text style={styles.songText}>{item}</Text>
            <TouchableOpacity onPress={() => removeSong(index)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#1DB954",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  songItem: {
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  songText: {
    color: "#fff",
  },
  removeButton: {
    color: "#FF5C5C",
  }
});
