import React, { Component } from 'react';

import axios from 'axios';

import keys from '../../config/keys';

import Navbar from '../layout/Navbar';
import Contact from './Contact';
import Projects from './Projects';
import Welcome from './Welcome';
import About from './About';

let query = `
{
  viewer {
    repositories(first: 100) {
      totalCount
      nodes {
        name
        description
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
      `;

let data = {
  query
};

let config = {
  headers: {
    Authorization: 'Bearer ' + toString(process.env.REACT_APP_GITHUB_KEY)
  }
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'welcome',
      projects: []
    };
  }

  componentDidMount() {
    console.log(process.env);
    axios
      .post('https://api.github.com/graphql', data, {
        headers: {
          Authorization: 'Bearer ' + toString(process.env.REACT_APP_GITHUB_KEY)
        }
      })
      .then(res => this.setState({ projects: res.data }));
  }

  setPage = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { projects, currentPage } = this.state;
    return (
      <div className="main-wrapper">
        <Navbar page={currentPage} setPage={this.setPage} />
        <div className="centered">
          {currentPage === 'welcome' ? (
            <Welcome />
          ) : currentPage === 'projects' ? (
            <Projects projects={projects === [] ? null : projects} />
          ) : currentPage === 'about' ? (
            <About />
          ) : (
            <Contact />
          )}
        </div>
      </div>
    );
  }
}

export default Main;
