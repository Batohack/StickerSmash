import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from '../theme/ThemeContext';
import { Button } from './Button';
import { Spinner } from './Spinner';
import TextInput from './TextInput';


export const Examples = () => (
  <ThemeProvider>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 18, marginBottom: 16 }}>Exemple de Bouton :</Text>
      <Button title="Mon bouton" onPress={() => alert('Bouton pressé!')} />
      <Text style={{ fontSize: 18, marginVertical: 16 }}>Exemple de Champ de texte :</Text>
      <TextInput placeholder="Votre texte ici" style={{ width: 250 }} />
      <Text style={{ fontSize: 18, marginVertical: 16 }}>Exemple de Spinner :</Text>
      <Spinner />
    </View>
  </ThemeProvider>
);
