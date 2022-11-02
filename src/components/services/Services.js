import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';

function Services() {
  return (
    <section id="services">
      <h5>What I do</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I Demonstrated expertise in translating the client&lsquo;s specific needs into
                easy-to-understand software solutions during onboarding
                achieving over 80% customer satisfaction.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I use markup languages like HTML to translate business ideas
                into user-friendly web pages by following industry standards for SEO
                and accessibility and add aesthetics and user interactivity
                using CSS and JavaScript respectively.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I have experience maintaining graphic standards and branding throughout
                the software UI.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I build responsive applications UIs using modern
                technologies like React and TypeScript and test them using jest library.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Front-end development */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I oversee backend development using Ruby on Rails to maintain
                website integrity with databases, its security and efficiency.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I create powerful content management systems to serve
                as interface for client.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design robust APIs to support mobile and desktop clients using
                Ruby on Rails framework and and write whole documentation with Swagger.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop automated tests to ensure business needs are met,
                and allow for regression testing.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I Compile and analyze data, processes, and codes to troubleshoot problems
                and identify areas for improvement.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Back-end development */}
        <article className="service">
          <div className="service__head">
            <h3>Technical Support | Code review</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I offer a supportive and educational experience to the individuals
                who are at the beginner level.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I Provided technical support to 100+ students, ensuring that they follow
                project guidelines and coding best practices like KISS, YAGNI, DRY, etc.
              </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I help improving the codebase quality in terms of structure, readability,
                and efficiency in a systematic manner.
              </p>
            </li>
          </ul>
        </article>
        {/* End of Technical support */}
      </div>
    </section>
  );
}

export default Services;
