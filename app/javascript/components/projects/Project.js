import React from "react"
import PropTypes from "prop-types"
class Project extends React.Component {
  render () {
    return (
      <div className="projectAlone col-lg-12 col-sm-12">
        <div className="projectAlone-within d-flex flex-row flex-wrap justify-content-center">
        <a href={this.props.livelink} target="_blank">
        <h3 className="title-project"> {this.props.name}</h3>
        </a>
        <div className="image-description-container">
          <div className="image-container">
          <a href={this.props.url} target="_blank">
          <img class="img-project" src={this.props.img} />
          </a>
          </div>
          <p className="">{this.props.description}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Project
