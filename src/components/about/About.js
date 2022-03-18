import React from 'react';
import { FaAward, FaUsers, FaFolderOpen } from 'react-icons/fa';
import './about.css';
import myProfile from '../../assets/best-profile.png';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={myProfile} alt="my profile" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ years working</small>
          </article>

          <article className="about__card">
            <FaUsers className="about__icon" />
            <h5>Clients</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>40+ Completed projects</small>
          </article>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <a href="#contact" className="btn btn-primary">Let&lsquo;s talk</a>
      </div>
    </div>
  </section>
);

export default About;
