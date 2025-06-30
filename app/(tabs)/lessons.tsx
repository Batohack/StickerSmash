import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MOCK_LESSONS = [
  { id: '1', title: 'Se présenter', level: 'A0', duration: '12 min' },
  { id: '2', title: 'Saluer', level: 'A0', duration: '10 min' },
  { id: '3', title: 'Compter', level: 'A1', duration: '15 min' },
];

export default function LessonsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leçons</Text>
      <FlatList
        data={MOCK_LESSONS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.lesson} onPress={() => {}}>
            <Text style={styles.lessonTitle}>{item.title}</Text>
            <Text style={styles.lessonInfo}>Niveau : {item.level} • {item.duration}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={{ color: '#F4A261', marginTop: 24 }}>Aucune leçon disponible</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2A36', // plus foncé pour le fond
    padding: 24,
  },
  title: {
    color: '#E76F51', // orange vif pour le titre
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  lesson: {
    backgroundColor: '#264653', // bleu foncé pour la carte
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  lessonTitle: {
    color: '#2A9D8F', // vert pour le titre de leçon
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  lessonInfo: {
    color: '#F4A261', // orange pâle pour infos
    fontSize: 15,
    marginTop: 2,
  },
});
