import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { Button } from '../components/Button';
import { ThemeProvider } from '../theme/ThemeContext';

describe('Button', () => {
  it('renders correctly and responds to press', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <ThemeProvider>
        <Button title="Test" onPress={onPress} />
      </ThemeProvider>
    );
    const btn = getByText('Test');
    fireEvent.press(btn);
    expect(onPress).toHaveBeenCalled();
  });
});
