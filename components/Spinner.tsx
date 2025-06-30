import React from 'react';
import { ActivityIndicator, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface SpinnerProps {
  size?: 'small' | 'large';
  style?: ViewStyle;
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'large', style }) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator
        size={size}
        color={theme.secondaryAlt}
        accessibilityRole="progressbar"
        testID="ActivityIndicator"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
