import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import TextInput from '../components/TextInput';
import { ThemeProvider } from '../theme/ThemeContext';

describe('TextInput', () => {
  it('renders and accepts text input', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider>
        <TextInput placeholder="Entrer du texte" onChangeText={onChangeText} />
      </ThemeProvider>
    );
    const input = getByPlaceholderText('Entrer du texte');
    fireEvent.changeText(input, 'Hello');
    expect(onChangeText).toHaveBeenCalledWith('Hello');
  });
});
