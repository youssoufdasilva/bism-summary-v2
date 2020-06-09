import React from 'react';
import { ThemeContext } from '../theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          // className={
          //   theme === 'rainbow'
          //     ? 'w-6 h-6 rounded-full bg-orange-700'
          //     : `w-6 h-6 rounded-full bg-${theme}-700`
          // }
        >
          {theme === 'rainbow' ? (
            <span role='img' aria-label='rainbow'>
              🌈
            </span>
          ) : (
            <span role='img' aria-label='black heart'>
              🖤
            </span>
          )}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;

/*
{({ theme, toggleTheme }) => (
              <li
                onClick={toggleTheme}
                className={
                  theme === 'rainbow' ? 'bg-orange-500' : `bg-${theme}-500`
                }
                // style={{backgroundColor: theme.background}}
              >
                <span role='img' aria-label='hearts'>
                  🖤🌈
                </span>
              </li>
            )}
*/
