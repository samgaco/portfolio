/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/index'
import Contact from './Navigation/Contact'
import mainIMG from 'images/main/main-t.png'

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

        <div className="main-body">
        <div className="about-body">
        <img src={mainIMG} />
        <p class="about-text">
        
        Hi! I am <span class="highlight">Samuel.</span> A FullStack Developer from Spain.  
        <a class="about-cv" href="https://drive.google.com/file/d/1V2wLtYORhx8SiiRFr0xVXzZULNfqoxZH/view?usp=sharing" target="_blank"> Check my CV here.</a>
        </p>
        </div>

      

        </div>

      </main>
    );
  }
}

export default Home;
