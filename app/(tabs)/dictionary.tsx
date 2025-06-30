import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const MOCK_DICTIONARY = [
  { id: '1', word: 'Mboka', translation: 'Ville', example: 'Je vais au mboka.' },
  { id: '2', word: 'Muna', translation: 'Enfant', example: 'Le muna joue.' },
  { id: '3', word: 'Njambe', translation: 'Dieu', example: 'Njambe est grand.' },
];

export default function DictionaryScreen() {
  const [search, setSearch] = React.useState('');
  const filtered = MOCK_DICTIONARY.filter(e =>
    e.word.toLowerCase().includes(search.toLowerCase()) ||
    e.translation.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dictionnaire</Text>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un mot..."
        placeholderTextColor="#F4A261"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.word}>{item.word}</Text>
            <Text style={styles.translation}>{item.translation}</Text>
            <Text style={styles.example}>{item.example}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ color: '#F4A261', marginTop: 24 }}>Aucun résultat</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264653',
    padding: 24,
  },
  title: {
    color: '#F4A261',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#2A9D8F',
    color: '#F4A261',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  item: {
    backgroundColor: '#2A9D8F',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  word: {
    color: '#F4A261',
    fontWeight: 'bold',
    fontSize: 18,
  },
  translation: {
    color: '#F4A261',
    fontSize: 16,
  },
  example: {
    color: '#F4A261',
    fontStyle: 'italic',
    fontSize: 14,
  },
});
