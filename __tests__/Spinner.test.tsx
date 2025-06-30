import { render } from '@testing-library/react-native';
import React from 'react';
import { Spinner } from '../components/Spinner';
import { ThemeProvider } from '../theme/ThemeContext';

describe('Spinner', () => {
  it('renders ActivityIndicator', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Spinner />
      </ThemeProvider>
    );
    // ActivityIndicator does not have a testID by default, but we can check existence
    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });
});
