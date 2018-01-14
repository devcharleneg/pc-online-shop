import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home/';

  class Routes extends Component {
    render() {
      return (
        <Router>
          <div>
              <Route exact path="/" component={Home} title="Home"/>
          </div>
        </Router>
      )
    }
  }

  export default Routes;