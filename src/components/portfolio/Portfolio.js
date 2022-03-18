import React from 'react';
import './portfolio.css';
import ProjectImage1 from '../../assets/umuhanzi-thumbnail.jpg';

const projectData = [
  {
    id: 1,
    image: ProjectImage1,
    title: 'Stock Market Trends',
    github: 'https://github.com/BertrandConxy/Stocks-market-trends',
    demo: 'https://stockmarkettrends.netlify.app/',
  },

  {
    id: 2,
    image: ProjectImage1,
    title: "Space Traveller's Hub",
    github: 'https://github.com/BertrandConxy/Space-Travellers-Hub',
    demo: 'https://spacecrafthub.netlify.app/',
  },

  {
    id: 3,
    image: ProjectImage1,
    title: "Space Traveller's Hub",
    github: 'https://github.com/BertrandConxy/Space-Travellers-Hub',
    demo: 'https://spacecrafthub.netlify.app/',
  },

  {
    id: 4,
    image: ProjectImage1,
    title: 'Cinemash',
    github: 'https://github.com/BertrandConxy/JS-Capstone-Project',
    demo: 'https://cinemash.netlify.app/',
  },

  {
    id: 5,
    image: ProjectImage1,
    title: 'Isomo Online',
    github: 'https://github.com/BertrandConxy/Isomo-online',
    demo: 'https://isomonline.netlify.app/',
  },

  {
    id: 6,
    image: ProjectImage1,
    title: 'Umuhanzi Concert Website',
    github: 'https://github.com/BertrandConxy/umuhanzi-concert-website',
    demo: 'https://bertrandconxy.github.io/umuhanzi-concert-website/',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projectData.map((project) => (
          <article className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.image} alt="project thumbnail" />
            </div>
            <h3>{project.title}</h3>
            <div className="cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
