import React from 'react';
import './header.css';
import CTA from './CTA';
import myPhoto from '../../assets/profile1.JPG';

const Header = () => (
  <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Bertrand Mutangana</h1>
      <h5 className="text-light">Full-stack Developer</h5>
      <CTA />
      <div className="me">
        <img src={myPhoto} alt="my photo" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
