import React from 'react';
import github from './assets/github.svg';
import facebook from './assets/facebook.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';

const Icons = () =>{
    return(
    <div>
        <a href='https://twitter.com/Austoe6' target='_blank' rel="noopener noreferrer">
          <img src={twitter} alt='twitter-link' className='social-icons' />
        </a>
        <a href='https://fb.me/techgeniusblog' target='_blank' rel="noopener noreferrer">
          <img src={facebook} alt='facebook-link' className='social-icons' />
        </a>
        <a href='https://github.com/Austoe6' target='_blank' rel="noopener noreferrer">
          <img src={github} alt='github-link' className='social-icons' />
        </a>
        <a href='https://www.linkedin.com/in/austin-omonyo-497301143/' target='_blank' rel="noopener noreferrer">
          <img src={linkedin} alt='linkedin-link' className='social-icons' />
        </a>
    </div>
    );
}

export default Icons;