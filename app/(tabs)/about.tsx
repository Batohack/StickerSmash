import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { lightTheme, darkTheme } from '../../theme/colors';

export default function AboutScreen() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}> 
      <Text style={[styles.text, { color: colors.text }]}>About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});
