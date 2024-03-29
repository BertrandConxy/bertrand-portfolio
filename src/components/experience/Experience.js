import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="experience">
    <h5>What skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>TYPESCRIPT</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>BOOTSTRAP</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>TAILWIND</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>REACT.JS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>NEXT.JS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

        </div>
      </div>

      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>MYSQL</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>POSTGRESQL</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>RUBY</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>RUBY ON RAILS</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icons" />
            <div>
              <h4>PYTHON</h4>
              <small className="text-light">Beginner</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
