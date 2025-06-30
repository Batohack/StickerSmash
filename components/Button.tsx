import React from 'react';

import { Animated, Easing, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ title, onPress, style, textStyle, disabled }) => {
  const { theme } = useTheme();
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.13,
        duration: 120,
        useNativeDriver: true,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
        easing: Easing.in(Easing.ease),
      }),
    ]).start(() => onPress && onPress());
  };

  return (
    <Animated.View style={[{ transform: [{ scale }] }, style]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
            borderRadius: 999,
            paddingVertical: 8,
            paddingHorizontal: 16,
          },
          disabled && { opacity: 0.5 },
        ]}
        onPress={handlePress}
        disabled={disabled}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityState={{ disabled }}
      >
        <Text style={[styles.text, { color: theme.buttonText, fontSize: 18, fontWeight: 'bold' }, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginVertical: 8,
    // le style du bouton est maintenant géré dans le composant pour le rendre rond et sans fond
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
