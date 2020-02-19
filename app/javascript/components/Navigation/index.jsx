/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Selectnavigation from './selectNavigation'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.allCategories = this.allCategories.bind(this);
  }

  allCategories(categories){
      return categories.map((category, index)=>(
        <Selectnavigation key={index} name={category}/>
      ));
  }

  render() {
    const categories = ["Home", "Projects"];
    const allCategories = this.allCategories(categories);
    return(

        <nav className="d-flex justify-content-center">
          <div className="nav-buttons btn-group">
            {allCategories}
          </div>

        </nav>

    );
  }
}

export default Navigation;