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
            <small>1+ years work experience</small>
          </article>

          <article className="about__card">
            <FaUsers className="about__icon" />
            <h5>Collaborators</h5>
            <small>100+ Worldwide</small>
          </article>

          <article className="about__card">
            <FaFolderOpen className="about__icon" />
            <h5>Projects</h5>
            <small>40+ Completed projects</small>
          </article>
        </div>

        <p>
          Solution-driven Full-stack web developer who is adept at contributing to a highly
          collaborative work environment, finding solutions, and determining customer satisfaction.
          Proven experience developing consumer-focused websites using React, TypeScript, Ruby,
          and Ruby on Rails. Built products for desktop and mobile app users over 1+ years,
          meeting the highest standards for web design, user experience, best practices,
          and speed. Designed and developed web applications across multiple platforms,
          APIs, third-party integrations, and databases.
          <br />
          <br />
          If you&lsquo;ve ever visited a website with an outstanding user interface
          and had a memorable experience interacting with it, that&lsquo;s the
          kind of websites I build. I&lsquo;ve been doing this for more than two
          years. I studied at Microverse, an online software development school
          based in California, USA. It equiped me with international-standard
          software development skills, remote working and working in a
          cross-cultural environment. I worked at Juubix ltd, a collaboration
          and finance software based in London, UK. I was part of the Front-end
          development team and also assisted in the backend development.
          <br />
          I can help start-ups and individuals
          who want to turn their ideas into a finished product ready to serve
          the community. I can also add value to any bussiness where I can help
          them connect with their customers anytime everywhere.
        </p>

        <a href="#contact" className="btn btn-primary">
          Let&lsquo;s talk
        </a>
      </div>
    </div>
  </section>
);

export default About;
