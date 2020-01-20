import React from "react"
import PropTypes from "prop-types"
class Project extends React.Component {
  render () {
    return (
      <div className="projectAlone col-lg-6 col-sm-12">
        <div className="projectAlone-within">
        <h3 className=""> {this.props.name}</h3>
        <div className="">
        <a href={this.props.url} target="_blank">
        <img src={this.props.img} />
        </a>
        <p className="">
        {this.props.description}</p>
        </div>
      </div>
      </div>
    );
  }
}

export default Project
