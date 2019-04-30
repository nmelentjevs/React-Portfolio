import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div
          className="about-details"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="about-heading">
            <h1>About</h1>
            <h6>Myself</h6>
          </div>
          <p>
            Riga based full-stack web developer. Main stack is ReactJS/Redux,
            NodeJS, Express, MongoDB, GraphQL.
          </p>
          <div className="skills-grid">
            <i className="fab fa-react fa-2x" />
            <i className="fab fa-node-js fa-2x" />
            <i className="fab fa-js fa-2x" />
            <i className="fab fa-python fa-2x" />
            <i className="fas fa-database fa-2x" />
          </div>
          <div className="social-media">
            <ul className="icon-list">
              <li>
                <a
                  href="https://www.linkedin.com/in/nikita-melentjevs-870265138/"
                  className="icon-link"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://github.com/nmelentjevs" className="icon-link">
                  <i className="fab fa-github-square" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
