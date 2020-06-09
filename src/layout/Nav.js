import React from 'react';
import { NavLink } from 'react-router-dom';

const navs = [
  { path: '/', name: 'Home' },
  { path: '/cst4310', name: 'CST4310' },
  { path: '/cst4320', name: 'CST4320' },
  { path: '/cst4330', name: 'CST4330' },
  { path: '/cst4350', name: 'CST4350' },
];

const Nav = () => (
  <nav className='bg-orange-600 text-orange-300 p-4 shadow-md'>
    <ul className='hidden'>
      <li>🤍 vs 🌈</li>
    </ul>
    <ul className='flex space-x-4 justify-end'>
      {navs.map((navItem) => (
        <li>
          <NavLink
            exact
            activeClassName='text-orange-100 border-b-2 border-white'
            to={navItem.path}
          >
            {navItem.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
