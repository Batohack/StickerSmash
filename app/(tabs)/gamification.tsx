import React from 'react';
import { Text, View } from 'react-native';

export default function GamificationTabScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#264653' }}>
      <Text style={{ color: '#F4A261', fontSize: 24, fontWeight: 'bold' }}>Gamification</Text>
      {/* TODO: Afficher badges, points, classements, etc. */}
    </View>
  );
}
