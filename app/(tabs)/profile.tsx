import React, { useState } from 'react';
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  // Simuler un utilisateur connecté (à remplacer par store ou API)
  const [user, setUser] = useState({
    name: "Jean Dupont",
    level: "Débutant",
    language: "Douala",
    avatar: 'https://ui-avatars.com/api/?name=Jean+Dupont',
    email: 'jean.dupont@email.com',
    progress: 42,
  });
  const [editModal, setEditModal] = useState(false);
  const [editName, setEditName] = useState(user.name);
  const [editLanguage, setEditLanguage] = useState(user.language);

  // Formulaire d'édition du profil
  const handleSave = () => {
    setUser({ ...user, name: editName, language: editLanguage });
    setEditModal(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.level}>Niveau : {user.level}</Text>
      <Text style={styles.info}>Langue cible : {user.language}</Text>
      <Text style={styles.info}>Email : {user.email}</Text>
      <View style={styles.progressBox}>
        <Text style={styles.progressLabel}>Progression :</Text>
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBar, { width: `${user.progress}%` }]} />
        </View>
        <Text style={styles.progressValue}>{user.progress}%</Text>
      </View>
      <Button title="Modifier le profil" onPress={() => setEditModal(true)} color="#E76F51" />
      {/* Historique et préférences (mock) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Historique</Text>
        <Text style={styles.sectionText}>Dernière leçon : Se présenter</Text>
        <Text style={styles.sectionText}>Badges : 2/10</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Préférences</Text>
        <Text style={styles.sectionText}>Notifications : activées</Text>
        <Text style={styles.sectionText}>Thème : Système</Text>
      </View>
      {/* Modal édition */}
      <Modal visible={editModal} animationType="slide" transparent>
        <View style={styles.modalBg}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Modifier le profil</Text>
            <TextInput
              style={styles.input}
              value={editName}
              onChangeText={setEditName}
              placeholder="Nom"
              placeholderTextColor="#F4A261"
            />
            <TextInput
              style={styles.input}
              value={editLanguage}
              onChangeText={setEditLanguage}
              placeholder="Langue cible"
              placeholderTextColor="#F4A261"
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
              <TouchableOpacity onPress={() => setEditModal(false)} style={styles.cancelBtn}>
                <Text style={{ color: '#264653', fontWeight: 'bold' }}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave} style={styles.saveBtn}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Enregistrer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    color: '#F4A261',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  level: {
    color: '#F4A261',
    fontSize: 16,
    marginBottom: 4,
  },
  info: {
    color: '#F4A261',
    fontSize: 16,
    marginBottom: 8,
  },
  progressBox: {
    width: '100%',
    marginVertical: 16,
    alignItems: 'center',
  },
  progressLabel: {
    color: '#F4A261',
    fontSize: 16,
    marginBottom: 4,
  },
  progressBarBg: {
    width: '80%',
    height: 14,
    backgroundColor: '#F4A26133',
    borderRadius: 7,
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: 14,
    backgroundColor: '#E76F51',
    borderRadius: 7,
  },
  progressValue: {
    color: '#F4A261',
    fontSize: 14,
    marginTop: 2,
  },
  section: {
    width: '100%',
    backgroundColor: '#2A9D8F',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#F4A261',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  sectionText: {
    color: '#F4A261',
    fontSize: 14,
    marginBottom: 2,
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#264653',
    borderRadius: 12,
    padding: 24,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    color: '#F4A261',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#2A9D8F',
    color: '#F4A261',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    width: '100%',
  },
  cancelBtn: {
    backgroundColor: '#F4A261',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 8,
  },
  saveBtn: {
    backgroundColor: '#E76F51',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginLeft: 8,
  },
});
