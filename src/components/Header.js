import React from 'react';
import Resume from '../resume/cv_max_klein_9october2021.pdf';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

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
              <span className='bold'>React/ Vue developer </span>
              from the Netherlands.
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
                Contact me below to chat about (freelance) opportunities,
                or just to say hello.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='icons'>
        <a href="https://www.linkedin.com/in/maxklein1992/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon style={{ fontSize: 40 }} color="primary" />
        </a>
        <a href="https://github.com/maxklein1992" target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: 40 }} color="primary" />
        </a>
        <a href="mailto:mcklein1992@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon style={{ fontSize: 40 }} color="primary" />
        </a>
      </div>
    </header>
  );
};

export default Header;
