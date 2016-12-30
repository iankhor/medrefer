import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {requireAuth} from '../auth';
import Site from './Site';
import Home from './Home';
import Login from './Login';
import EditProfile from './EditProfile';
import Referral from './Referral';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      {/*<Route component={Site}>*/}
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route onEnter={requireAuth}>
            {/* Place all authenticated routes here */}
            <Route path="/profile/edit" component={EditProfile} />
            <Route path="/referral" component={Referral} />
          </Route>
      {/*  </Route> */}
      </Router>
    );
  }
}

export default App;
