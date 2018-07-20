import * as React from 'react';
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Users from './Users';

import users from './containers/users';
import store from './store';

const ConnectedUsers = users(Users);

const App: React.SFC = () => (
  <Provider store={store}>
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/users" component={ConnectedUsers} />
      </Switch>
    </React.Fragment>
  </Provider>
);

export default App;
