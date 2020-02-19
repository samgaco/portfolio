import React from "react"
import githubIMG from 'images/contact/github.svg'
import twitterIMG from 'images/contact/twitter.svg'
import linkedinIMG from 'images/contact/linkedin.svg'

class Contact extends React.Component {
  render () {
    return (
      <div className="contact-icons d-flex flex-row flex-wrap justify-content-center">
      <div>
        <a class="githubIMG" href="https://github.com/samgaco" target="_blank">
          <img src={githubIMG} />
        </a>
      </div>

      <div>
        <a class="linkedinIMG" href="https://www.linkedin.com/in/samuel-garc%C3%ADa-companys-0a848284/" target="_blank">
          <img src={linkedinIMG} />
        </a>
      </div>

      <div>
        <a class="twitterIMG" href="https://twitter.com/samuelgcompanys" target="_blank">
          <img src={twitterIMG} />
        </a>
      </div>
    </div>
    );
  }
}

export default Contact
