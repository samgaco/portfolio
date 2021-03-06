import React from "react"
import githubIMG from 'images/contact/github.svg'
import twitterIMG from 'images/contact/twitter.svg'
import linkedinIMG from 'images/contact/linkedin.svg'
import { SocialIcon } from 'react-social-icons';

class Contact extends React.Component {
  render () {
    return (
      <div className="contact-icons row justify-content-center">

      <div className="contactIcon-div col-4">
      <SocialIcon className="hvr-grow-rotate" network="github" url="https://github.com/samgaco" target="_blank" />
      </div>

      <div className="contactIcon-div col-4">
      <SocialIcon className="hvr-grow-rotate" url="https://www.linkedin.com/in/samuel-garcia-companys/" target="_blank" />
      </div>

      <div className="contactIcon-div col-4">
      <SocialIcon className="hvr-grow-rotate" network="twitter" url="https://twitter.com/samuelgcompanys" target="_blank" />
      </div>
    </div>
    );
  }
}

export default Contact
