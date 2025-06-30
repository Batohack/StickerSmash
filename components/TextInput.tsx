import React from 'react';
import { TextInput as RNTextInput, StyleSheet, TextInputProps, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';



type Props = TextInputProps & {
  inputStyle?: TextStyle;
};

const TextInput: React.FC<Props> = ({ inputStyle, ...props }) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <RNTextInput
      style={[
        styles.input,
        { backgroundColor: theme.secondaryAlt, color: theme.text, borderColor: isFocused ? theme.primary : theme.border, borderWidth: isFocused ? 2 : 1 },
        props.style,
        inputStyle,
      ]}
      placeholderTextColor={theme.text + '66'}
      accessible
      accessibilityLabel={props.placeholder}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
};



const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 8,
    fontSize: 16,
  },
});

export default TextInput;
