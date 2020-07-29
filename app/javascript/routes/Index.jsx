import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import ProjectList from '../components/projects/ProjectList';
import Blog from '../components/blog/blog';


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Projects" exact component={ProjectList} />
      <Route path="/Blog" exact component={Blog} />
    </Switch>
  </Router>
);
