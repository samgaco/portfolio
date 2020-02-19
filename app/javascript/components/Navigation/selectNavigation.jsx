/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom';
import ProjectList from '../projects/ProjectList';

class Selectnavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <Fade in={true} timeout={4000}>
        <Link to={`${this.props.name}`}>
          <div className="btn  font-weight-bold navbuttons">
            <h2>
        {this.props.name}</h2>
        </div>
        </Link>
      </Fade>

    );
  }
}

export default Selectnavigation;