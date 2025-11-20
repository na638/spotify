// ProfileForm.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, FadeIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const STORAGE_KEY = '@profile_form_v1';
const GENRES = ['Pop', 'Rock', 'Jazz', 'Classical', 'Hip-Hop'];

function validateUsername(u: string) {
  return /^[A-Za-z0-9_]{3,20}$/.test(u);
}
function validateEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

const ProfilePreview = React.memo(({ username, email, genre }: { username: string; email: string; genre: string | null }) => {
  const uri = genre ? `https://via.placeholder.com/100?text=${encodeURIComponent(genre)}` : 'https://via.placeholder.com/100?text=User';
  return (
    <Animated.View entering={FadeIn.duration(300)} style={styles.previewCard}>
      <Image source={{ uri }} style={styles.previewImg} />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.previewName}>{username || 'Your username'}</Text>
        <Text style={styles.previewMeta}>{email || 'you@example.com'}</Text>
        <Text style={styles.previewMeta}>{genre || 'Genre'}</Text>
      </View>
    </Animated.View>
  );
});

export default function ProfileForm() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState<string | null>(null);

  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [genreError, setGenreError] = useState<string | null>(null);

  const shake = useSharedValue(0);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const d = JSON.parse(raw);
          setUsername(d.username || '');
          setEmail(d.email || '');
          setGenre(d.genre || null);
        }
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  // persist
  useEffect(() => {
    const t = setTimeout(async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ username, email, genre }));
      } catch (e) {
        console.warn(e);
      }
    }, 250);
    return () => clearTimeout(t);
  }, [username, email, genre]);

  function submit() {
    let ok = true;
    if (!validateUsername(username)) {
      setUsernameError('3–20 chars. letters, numbers or underscore.');
      ok = false;
      shake.value = withTiming(1, { duration: 200 }, () => (shake.value = 0));
    } else setUsernameError(null);

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email.');
      ok = false;
      shake.value = withTiming(1, { duration: 200 }, () => (shake.value = 0));
    } else setEmailError(null);

    if (!genre) {
      setGenreError('Pick a genre.');
      ok = false;
    } else setGenreError(null);

    if (!ok) return;

    AsyncStorage.removeItem(STORAGE_KEY).catch(console.warn);
    setUsername('');
    setEmail('');
    setGenre(null);
    alert('Profile saved locally (no backend). Form cleared.');
  }

  const shakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(shake.value ? -8 : 0) }],
  }));

  const isPreviewVisible = !!(username || email || genre);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create Profile</Text>

      <Animated.View style={[styles.inputWrap, shakeStyle]}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(v) => {
            setUsername(v);
            if (usernameError) setUsernameError(null);
          }}
          style={styles.input}
        />
        {usernameError && <Animated.Text entering={FadeIn.duration(200)} style={styles.error}>{usernameError}</Animated.Text>}
      </Animated.View>

      <Animated.View style={[styles.inputWrap, shakeStyle]}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={(v) => {
            setEmail(v);
            if (emailError) setEmailError(null);
          }}
          style={styles.input}
        />
        {emailError && <Animated.Text entering={FadeIn.duration(200)} style={styles.error}>{emailError}</Animated.Text>}
      </Animated.View>

      <View style={styles.genreWrap}>
        <Text style={{ color: 'white', marginBottom: 8 }}>Select Genre</Text>
        <View style={styles.genreRow}>
          {GENRES.map((g) => {
            const selected = g === genre;
            return (
              <TouchableOpacity
                key={g}
                style={[styles.genreBtn, selected && styles.genreBtnSelected]}
                onPress={() => {
                  setGenre(g);
                  setGenreError(null);
                }}
              >
                <Text style={[styles.genreText, selected && { color: 'black', fontWeight: '700' }]}>{g}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {genreError && <Animated.Text entering={FadeIn.duration(200)} style={styles.error}>{genreError}</Animated.Text>}
      </View>

      <TouchableOpacity onPress={submit} style={styles.saveBtn}>
        <Text style={{ color: 'black', fontWeight: '700' }}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(tabs)/home')} style={styles.backBtn}>
        <Text style={{ color: 'white', fontWeight: '700' }}>Back to Home</Text>
      </TouchableOpacity>

      <Text style={styles.previewLabel}>Preview</Text>
      {isPreviewVisible ? (
        <ProfilePreview username={username} email={email} genre={genre} />
      ) : (
        <Text style={{ color: '#888', textAlign: 'center', paddingVertical: 10 }}>Preview will appear here</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#000', minHeight: 800 },
  heading: { color: 'white', fontSize: 20, fontWeight: '700', marginBottom: 12 },
  inputWrap: { marginBottom: 10 },
  input: { backgroundColor: '#121212', color: 'white', padding: 12, borderRadius: 8 },
  error: { color: '#ff6b6b', marginTop: 6 },
  genreWrap: { marginTop: 8, marginBottom: 16 },
  genreRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  genreBtn: { padding: 10, backgroundColor: '#222', borderRadius: 8, marginRight: 8, marginBottom: 8 },
  genreBtnSelected: { backgroundColor: '#1DB954' },
  genreText: { color: 'white' },
  saveBtn: { backgroundColor: '#fff', padding: 14, borderRadius: 12, alignItems: 'center', marginVertical: 8 },
  backBtn: { backgroundColor: '#1DB954', padding: 14, borderRadius: 12, alignItems: 'center', marginVertical: 8 },
  previewLabel: { color: '#ddd', marginTop: 12, marginBottom: 8, fontWeight: '600' },
  previewCard: { flexDirection: 'row', alignItems: 'center', padding: 12, backgroundColor: '#181818', borderRadius: 12 },
  previewImg: { width: 80, height: 80, borderRadius: 8, backgroundColor: '#333' },
  previewName: { color: 'white', fontSize: 18, fontWeight: '700' },
  previewMeta: { color: '#b3b3b3' },
});
