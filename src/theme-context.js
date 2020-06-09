import React from 'react';

export const themes = {
  gray: 'gray',
  rainbow: 'rainbow',
};

export const ThemeContext = React.createContext({
  theme: themes.gray,
  toggleTheme: () => {},
}); // default value
