import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from 'containers/Layout/Layout.jsx';
import Home from 'views/Home/Home.jsx';
import About from 'views/About/About.jsx';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route component={Layout}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    );
  }
}

export default App;
