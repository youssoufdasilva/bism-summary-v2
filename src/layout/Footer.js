import React from 'react';

import { ThemeContext } from '../theme-context';

const Footer = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <footer
        className={
          theme === 'rainbow'
            ? 'bg-orange-600 text-center p-4 text-white text-sm md:text-base'
            : `bg-${theme}-600 text-center p-4 text-white text-sm md:text-base`
        }
      >
        Created with 🤍 by the Flightless Crows!
      </footer>
    )}
  </ThemeContext.Consumer>
);

export default Footer;
