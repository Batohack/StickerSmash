import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from '../../theme/ThemeContext';

export default function Index() {
  const { theme, toggleTheme } = useTheme();
  const colors = theme;
  // Ajout d'une détection du mode clair/sombre selon la couleur de fond
  const isDark = colors.background === '#181818';

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      {/* Bouton thème en haut à droite */}
      <View style={{ position: 'absolute', top: 8, right: 12, zIndex: 10 }}>
        <Button
          title={isDark ? '🌙 Thème sombre' : '☀️ Thème clair'}
          onPress={toggleTheme}
          style={{ minWidth: 150, paddingHorizontal: 12 }}
        />
      </View>
      <Text style={[styles.text, { color: colors.text, fontWeight: 'bold', fontSize: 28 }]}>Bienvenue sur LanguePlus !</Text>
      <Text style={[styles.text, { color: colors.text, fontSize: 18, marginBottom: 24 }]}>Votre application d&apos;apprentissage de langue maternelle.</Text>
      <Text style={[styles.text, { color: colors.text, fontSize: 16, marginBottom: 32 }]}>Explorez des leçons interactives, un dictionnaire illustré, des jeux, et une communauté pour progresser dans votre langue d&apos;origine, à votre rythme et selon vos besoins.</Text>
      {/* Contenu intuitif d'accueil */}
      <View style={{ alignItems: 'center', marginVertical: 32 }}>
        <Text style={{ color: colors.primary, fontSize: 22, fontWeight: 'bold', marginBottom: 12 }}>🚀 Démarrez votre aventure linguistique !</Text>
        <Text style={{ color: colors.text, fontSize: 16, marginBottom: 18, textAlign: 'center', maxWidth: 350 }}>
          • Suivez des parcours personnalisés selon votre niveau{"\n"}
          • Gagnez des badges en progressant{"\n"}
          • Consultez vos statistiques d&apos;apprentissage{"\n"}
          • Changez de thème à tout moment
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
});
