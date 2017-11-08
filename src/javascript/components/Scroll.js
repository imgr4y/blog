import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Card from 'components/Card';

const getPrevProject = ({ allProjects, projectId }) => {

  if (projectId === 0) {
    return allProjects[allProjects.length - 1];
  }
  return allProjects[projectId - 1];
};

const getNextProject = ({ allProjects, projectId}) => {

  if (projectId === allProjects.length - 1) {
    return allProjects[0];
  } 
  return allProjects[projectId + 1];
};

const PrevNext = (props) => {
  const prevProject = getPrevProject(props);
  const nextProject = getNextProject(props);

  document.onkeydown = (e) => {
    switch (e.keyCode) {
      case 37:
        return props.history.push(`/projects/${prevProject.slug}`);
      case 39:
        return props.history.push(`/projects/${nextProject.slug}`);
      default:
        return null;
    }
  }

  return (
    <div>
      <section className="container prevnext">
        <Card project={prevProject} direction="Previous" />
        <Card project={nextProject} direction="Next" />
      </section>
    </div>
  );
};

PrevNext.propTypes ={
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};


