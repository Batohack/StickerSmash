import React from 'react';
import { Text, View } from 'react-native';

export default function AuthScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#264653' }}>
      <Text style={{ color: '#F4A261', fontSize: 24, fontWeight: 'bold' }}>Authentification</Text>
      {/* TODO: Ajouter navigation vers Connexion/Inscription */}
    </View>
  );
}
