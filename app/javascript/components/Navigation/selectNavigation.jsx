/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

class Selectnavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <Fade in={true} timeout={4000}>
          <div className="btn  font-weight-bold navbuttons">
            <h2>
        {this.props.name}</h2>
        </div>
      </Fade>

    );
  }
}

export default Selectnavigation;