import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '../../theme/ThemeContext';
import { lightTheme, darkTheme } from '../../theme/colors';
import Button from '../../components/Button';

export default function Index() {
  const { theme, toggleTheme } = useTheme();
  const colors = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={[styles.text, { color: colors.text }]}>Home screen</Text>
      <Link href="./about" style={[styles.button, { color: colors.primary }]}>Go to About screen</Link>
      <Button title={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'} onPress={toggleTheme} />
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
