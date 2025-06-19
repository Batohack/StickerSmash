import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { lightTheme, darkTheme } from '../theme/colors';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function Button({ title, ...props }: ButtonProps) {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors.button }]} {...props}>
      <Text style={[styles.text, { color: colors.buttonText }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
