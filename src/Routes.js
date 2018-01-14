import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';

  class Routes extends Component {
    render() {
      return (
        <Router>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
          </div>
        </Router>
      )
    }
  }

  export default Routes;