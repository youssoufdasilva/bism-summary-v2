import React from 'react';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
  <div className='flex flex-col h-screen'>
    <Nav />

    <div className='container mx-auto mb-auto text-center p-2 lg:p-10'>
      {props.children}
    </div>

    <Footer />
  </div>
);

export { Layout };
