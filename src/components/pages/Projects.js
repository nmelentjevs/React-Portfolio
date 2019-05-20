import React, { useState } from 'react';

function Projects(props) {
  const [project, setProject] = useState(
    props.projects.data.viewer.repositories.nodes[
      props.projects.data.viewer.repositories.nodes.length - 1
    ].name
  );
  const [description, setDescription] = useState(
    props.projects.data.viewer.repositories.nodes[
      props.projects.data.viewer.repositories.nodes.length - 1
    ].description
  );

  const changeProject = (name, description) => {
    setProject(name);
    setDescription(description);
  };

  return (
    <div className="projects-grid container">
      <div className="project-menu">
        <ul className="project-list">
          {props.projects.data.viewer.repositories.nodes
            .filter((project, id) => {
              return (
                id > props.projects.data.viewer.repositories.nodes.length - 7
              );
            })
            .reverse()
            .map((project, id) => {
              return (
                <li
                  key={id}
                  className="project-list-item"
                  onClick={() => {
                    changeProject(project.name, project.description);
                  }}
                >
                  <i className="fas fa-gem" />{' '}
                  {project.name.split('-')[0] +
                    ' ' +
                    (project.name.split('-')[1] === undefined
                      ? ''
                      : project.name.split('-')[1])}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="main-project">
        <h2 className="project-name">
          {project.split('-')[0] +
            ' ' +
            (project.split('-')[1] === undefined ? '' : project.split('-')[1])}
        </h2>
        <p>{description}</p>
        <div>
          <button className="project-button">
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://github.com/nmelentjevs/${project}`}
            >
              {' '}
              Github{' '}
            </a>
          </button>

          <button className="project-button">
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://${project.toLowerCase().split('-')[0] +
                project.toLowerCase().split('-')[1]}.herokuapp.com/`}
            >
              Live{' '}
            </a>{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
export default Projects;
