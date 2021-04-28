import React from 'react';
import Contact from './Contact';

const Footer = () => {
  return (
    <footer>
      <p>
        Built with{' '}
        <span role='img' aria-label='coffee'>
          ☕
        </span>{' '}
        and React
      </p>
      <p>© 2020-{new Date().getFullYear()} Max Klein</p>
      <div className='bottom-icons'>
        <Contact />
      </div>
    </footer>
  );
};

export default Footer;
