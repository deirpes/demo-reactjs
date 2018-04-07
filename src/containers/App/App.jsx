import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from 'containers/Layout/Layout.jsx';
import Home from 'views/Home/Home.jsx';
import StudentsList from 'views/Students/List.jsx';
import StudentsAdd from 'views/Students/Add.jsx';
import StudentsEdit from 'views/Students/Edit.jsx';
import Case from 'views/Case/Case.jsx';
class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
            <Route component={Layout}>
                <Route path="/" component={Home} />
                <Route path="/case" component={Case} />
                <Route path="/students" component={StudentsList} />
                <Route path="/students/add" component={StudentsAdd} />
                <Route path="/students/edit" component={StudentsEdit} />
            </Route>
        </Router>
    );
  }
}

export default App;
