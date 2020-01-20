import React from "react"
import PropTypes from "prop-types"
import Project from "./Project"

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
    this.mapProjects = this.mapProjects.bind(this)
  }
  componentDidMount() {
    const url = 'projects/index';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ projects: response }))
    }

  mapProjects(projects) {
    return projects.map((project) => (
      <Project
        key={project.id}
        name={project.name}
        url={project.url}
        img={project.img}
        description={project.description}
      />
    ));
  }
  render () {

    const AllProjects = this.mapProjects(this.state.projects)
    return (
      
      <div className="row projectTable">
        {AllProjects}
      </div>
    );
  }
}

export default ProjectList
