import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web and App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
        {/* End of Web development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  );
}

export default Services;
