import React from "react"
import PropTypes from "prop-types"
import entry from "./entry"
import Navigation from "../Navigation/index"

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Entries: [],
    };
    this.mapEntries = this.mapEntries.bind(this)
  }
  componentDidMount() {
    const url = 'Entries/index';
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => this.setState({ Entries: response }))
  }

  mapEntries(Entries) {
    return Entries.map((entry) => (
      <entry
        key="test"
      />
    ));
  }
  render() {

    const AllEntries = this.mapEntries(this.state.Entries)
    return (
      <div>
        <div class="main-title-container d-flex flex-row flex-wrap justify-content-center">
          <h1 className="main-name">Samuel García Companys</h1>
        </div>
        <div className="name-one-Entries d-flex flex-row flex-wrap justify-content-center">
          <div>
            <Navigation />
          </div>
        </div>

        <div className="entryTable">
          {AllEntries}
        </div>
      </div>
    );
  }
}

export default Blog
