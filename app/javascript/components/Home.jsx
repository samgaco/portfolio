/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation/index'
import ProjectList from './projects/ProjectList'
import githubIMG from 'images/contact/github.svg'
import twitterIMG from 'images/contact/twitter.svg'
import linkedinIMG from 'images/contact/linkedin.svg'
import mainIMG from 'images/main/main2.png'


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <main className="d-flex justify-content-center main-bg">
     <div className=" main-page">
         <div>
           <Navigation />
           <div className="image-one d-flex flex-row flex-wrap justify-content-center">
         <img src={mainIMG} />
         </div>
         <div className="name-one d-flex flex-row flex-wrap justify-content-center">
         <h1 className="main-name">Samuel</h1>
         </div>

        
         <div className="contact-icons d-flex flex-row flex-wrap justify-content-center">
                <div>
                    <a href="https://github.com/samgaco" target="_blank">
                    <img src={githubIMG} />
                    </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/samuel-garc%C3%ADa-companys-0a848284/" target="_blank"> 
                    <img src={linkedinIMG} />
                    </a>
                </div>

                <div>
                    <a href="https://twitter.com/KindredMgo" target="_blank">
                    <img src={twitterIMG} />
                    </a>
                </div>
         </div>

         </div>

         <div className="d-flex flex-row flex-wrap justify-content-center">

        <ProjectList />
        </div>
     </div>
     </main>
    );
  }
}

export default Home;
