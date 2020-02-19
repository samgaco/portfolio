/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/index'
import Contact from './Navigation/Contact'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <main>

        <div class="main-title-container d-flex flex-row flex-wrap justify-content-center">
          <h1 className="main-name">Samuel García Companys</h1>
          <Contact />
        </div>

        <div className="name-one d-flex flex-row flex-wrap justify-content-center">

          <div>
            <Navigation />
          </div>

        </div>

      </main>
    );
  }
}

export default Home;
