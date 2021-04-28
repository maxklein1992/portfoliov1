import React from 'react';
import Resume from '../resume/resume.pdf';
import Contact from './Contact';

const Header = () => {
  return (
    <header id='about'>
      <div className='row-wrap'>
        <div className='about__image'>
          <img 
            src={process.env.PUBLIC_URL + "/images/MaxKleinCircle.png"} 
            alt="Max Klein"
            className='about__picture'         
            />
        </div>
        <div className='title'>
          <h1>Max Klein</h1>
          <div className='biography'>
            <p className='header_paragraph'>
              I'm Max! I'm a{' '}
              <span className='bold'>software engineer </span>
              and economist in the Netherlands and currently residing in
              Rotterdam.
            </p>
            <p className='header_paragraph'>
              I enjoy building front-end applications using technologies such as JavaScript, React, React Native, SQL, and CSS.
            </p>
            <p className='header_paragraph'>
              {' '}
              Feel free to check out a selection of my{' '}
              <a href='#projects' aria-label='projects'>
                personal projects
              </a>{' '}
              and download my{' '}
              <a
                href={Resume}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='resume'
              >
                résumé
              </a>
              .{' '}
            </p>{' '}
            <div className='header_paragraph'>
              <div id='contact'>
                Contact me below to chat about opportunities, programming,
                or just to say hello.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='icons'>
       <Contact/>
      </div>
    </header>
  );
};

export default Header;
