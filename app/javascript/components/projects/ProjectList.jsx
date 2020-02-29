import React from "react"
import PropTypes from "prop-types"
import Project from "./Project"
import Navigation from "../Navigation/index"

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
        livelink={project.livelink}
      />
    ));
  }
  render() {

    const AllProjects = this.mapProjects(this.state.projects)
    return (
      <div>
        <div class="main-title-container d-flex flex-row flex-wrap justify-content-center">
          <h1 className="main-name">Samuel García Companys</h1>
        </div>
        <div className="name-one-projects d-flex flex-row flex-wrap justify-content-center">
          <div>
            <Navigation />
          </div>
        </div>

        <div className="projectTable">
          {AllProjects}
        </div>
      </div>
    );
  }
}

export default ProjectList
