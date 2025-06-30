import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

export default function CommunityScreen() {
  const { theme } = useTheme();
  const colors = theme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={[styles.text, { color: colors.primary }]}>Communauté LanguePlus</Text>
      <Text style={[styles.desc, { color: colors.text + '99' }]}>Partage, entraide et échanges entre apprenants !</Text>
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
});
