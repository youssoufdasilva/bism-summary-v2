import React from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../theme-context';
import ThemeTogglerButton from './ThemeTogglerButton';

const navs = [
  { path: '/', name: 'Home' },
  { path: '/cst4310', name: 'CST4310' },
  { path: '/cst4320', name: 'CST4320' },
  { path: '/cst4330', name: 'CST4330' },
  { path: '/cst4350', name: 'CST4350' },
];

class Nav extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <nav
            className={
              theme === 'rainbow'
                ? 'bg-orange-600 text-orange-300 p-4 shadow-md'
                : `bg-${theme}-600 text-${theme}-300 p-4 shadow-md`
            }
          >
            <ul className='flex space-x-4 justify-end'>
              {navs.map((navItem) => (
                <li>
                  <NavLink
                    exact
                    activeClassName={
                      theme === 'rainbow'
                        ? 'text-orange-100 border-b-2 border-gray'
                        : `text-${theme}-100 border-b-2 border-gray`
                    }
                    to={navItem.path}
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ))}
              <ThemeTogglerButton></ThemeTogglerButton>
            </ul>
          </nav>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Nav;
