import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import ProjectList from '../components/projects/ProjectList';


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Projects" exact component={ProjectList} />
    </Switch>
  </Router>
);
