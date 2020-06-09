import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

import { ThemeContext } from '../theme-context';

const Layout = (props) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div
        className={
          theme === 'rainbow'
            ? 'bg-orange-200 flex flex-col h-full min-h-screen'
            : `bg-${theme}-200 flex flex-col h-full min-h-screen`
        }
      >
        <Nav />

        <div className='container mx-auto mb-auto text-center p-2 lg:p-10'>
          {props.children}
        </div>

        <Footer />
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Layout;
