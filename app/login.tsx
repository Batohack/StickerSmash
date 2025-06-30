import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Simuler une authentification (à remplacer par appel API)
    setTimeout(() => {
      setLoading(false);
      if (email === 'jean.dupont@email.com' && password === 'azerty') {
        Alert.alert('Succès', 'Connexion réussie !');
        router.replace('/(tabs)/profile');
      } else {
        Alert.alert('Erreur', 'Email ou mot de passe incorrect');
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#F4A261"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#F4A261"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin} disabled={loading}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{loading ? 'Connexion...' : 'Se connecter'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register')} style={{ marginTop: 18 }}>
        <Text style={{ color: '#F4A261', textDecorationLine: 'underline' }}>S&#39;inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#264653',
    padding: 24,
  },
  title: {
    color: '#F4A261',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#2A9D8F',
    color: '#F4A261',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    width: 260,
  },
  loginBtn: {
    backgroundColor: '#E76F51',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 8,
    alignItems: 'center',
  },
});
