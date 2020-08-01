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
        <div className="main-page-cont">

          <div class="main-title-container d-flex flex-row flex-wrap justify-content-center container">
            <h1 className="main-name">Samuel García Companys </h1>
            <Contact />

            <div className="col-12 name-one d-flex flex-row flex-wrap justify-content-center">

                <Navigation />

            </div>
          </div>

          <div className="main-body container-fluid">


          <div className="row">
            <div className="aboutBody col-sm-12 col-md-4 d-flex flex-row flex-wrap">
              <div className="aboutBody_imageBox">
              <img src={mainIMG} />
              </div>
                <p className="aboutBody_text">
                  Hi! I am <span class="highlight">Samuel.</span> A FullStack Developer from Spain.
                  <a class="about-cv" href="https://drive.google.com/file/d/1V2wLtYORhx8SiiRFr0xVXzZULNfqoxZH/view?usp=sharing" target="_blank"> Check my CV here.</a>
                </p>
            </div>
            </div>


          </div>


        </div>
      </main>
    );
  }
}

export default Home;
