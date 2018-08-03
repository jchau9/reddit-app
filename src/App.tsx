import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

/* import About from './About'; */
// import Users from './Users';
import Login from './Login';

// import users from './containers/users';
// import store from './store';

// const ConnectedUsers = users(Users);

const App: React.SFC = () => (
  < React.Fragment >
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </React.Fragment >
);

export default App;
