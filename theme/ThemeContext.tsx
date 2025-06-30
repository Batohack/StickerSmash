import React, { createContext, ReactNode, useContext, useState } from 'react';

import { darkTheme, lightTheme } from './colors';

type ThemeObject = typeof lightTheme;

const ThemeContext = createContext<{
  theme: ThemeObject;
  toggleTheme: () => void;
} | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeObject>(lightTheme);

  const toggleTheme = () => setTheme((t) => (t === lightTheme ? darkTheme : lightTheme));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
