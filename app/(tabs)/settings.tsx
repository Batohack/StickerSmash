import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export default function SettingsScreen() {
  const { theme } = useTheme();
  const colors = theme;
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={[styles.text, { color: colors.primary }]}>Réglages</Text>
      <Text style={[styles.desc, { color: colors.text + '99' }]}>Personnalise ton expérience LanguePlus</Text>
      {/* Lien vers la page À propos */}
      <TouchableOpacity
        style={[styles.linkBox, { backgroundColor: '#E76F51' }]}
        activeOpacity={0.85}
        onPress={() => router.push('/(tabs)/about')}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>À propos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
  },
  linkBox: {
    marginTop: 32,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#623412',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
});
