import React from 'react';
import AnalyticsEventTracker from '../eventsTracker/AnalyticsEventTracker';
import './portfolio.css';
import ProjectImage1 from '../../assets/stock-market.png';
import ProjectImage2 from '../../assets/space-travellers.png';
import ProjectImage3 from '../../assets/spent.png';
import ProjectImage4 from '../../assets/cinemash.png';
import ProjectImage5 from '../../assets/isomo-online.png';
import ProjectImage6 from '../../assets/umuhanzi-thumbnail.jpg';

const projectData = [
  {
    id: 1,
    image: ProjectImage1,
    title: "Stock Market Trends",
    description:
      "Browse different active companies on the NewYork Stock Exchange Market, view company profile and past financial statement records. Built with React.js, Redux, React-testing-library, jest, bootstrap and slider.js",
    github: "https://github.com/BertrandConxy/Stocks-market-trends",
    demo: "https://stockmarkettrends.netlify.app/",
  },

  {
    id: 2,
    image: ProjectImage2,
    title: "Space Traveller's Hub",
    description:
      "Browse available Space Rocket launch and dragons as announced by SpaceX corporation. Reserve on and join your favorite missions among the available. Built with React.js, Redux,React-testing-library, jest and bootstrap.",
    github: "https://github.com/BertrandConxy/Space-Travellers-Hub",
    demo: "https://spacecrafthub.netlify.app/",
  },

  {
    id: 3,
    image: ProjectImage3,
    title: "Spent",
    description:
      "A personal finance tracker web app. Track your expenses and keep track of your budget. Built with Ruby, Ruby on Rails, devise, Rspec and bootstrap.",
    github: "https://github.com/BertrandConxy/Spent",
    demo: "https://cspent.herokuapp.com/",
  },

  {
    id: 4,
    image: ProjectImage4,
    title: "Cinemash",
    description:
      "Browse different movies and find the detailed information about each. Like, comment and reserve your favorite on Cinemash. Built with Vanilla ES6 Javascript, Jest, Webpack, html and css.",
    github: "https://github.com/BertrandConxy/JS-Capstone-Project",
    demo: "https://cinemash.netlify.app/",
  },

  {
    id: 5,
    image: ProjectImage5,
    title: "Isomo Online",
    github: "https://github.com/BertrandConxy/Isomo-online",
    description:
      "This is E-learning platform where people can browse different courses available, enroll for getting the course and also get in touch with the teachers. Built with HTML, CSS and JavaScript.",
    demo: "https://isomonline.netlify.app/",
  },

  {
    id: 6,
    image: ProjectImage6,
    title: "Umuhanzi Concert Website",
    github: "https://github.com/BertrandConxy/umuhanzi-concert-website",
    description:
      "Website for an even organising company where they can announce the upcoming event, provide all the details and people will be able to buy ticket on the site. Built with HTML, CSS and JavaScript.",
    demo: "https://bertrandconxy.github.io/umuhanzi-concert-website/",
  },
];

function Portfolio() {
  const gaEventTracker = AnalyticsEventTracker('Visit Projects');
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
            <small>{project.description}</small>
            <div className="cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker('View Source Code')}
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
                onClick={() => gaEventTracker('View Live Demo')}
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
