import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function RegisterScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#264653' }}>
      <Text style={{ color: '#F4A261', fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Inscription</Text>
      {/* TODO: Ajouter formulaire d'inscription */}
      <Button title="Déjà inscrit ? Connexion" color="#E76F51" onPress={() => router.push('/login')} />
    </View>
  );
}
