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
    <div className="projects-grid">
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
                  {project.name}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="main-project">
        <h4>{project}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Projects;
