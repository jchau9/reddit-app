import * as React from 'react';
import { Provider } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Users from './Users';

import users from './containers/users';
import store from './store';
// import Context from './UserContext';
// store w/ reducers that manage users
// should I redo the whole code ?? 
// where to put provider? in app.tsx or in users.tsx
// smart components: all code logic need to be handled here, also called containers,
// interact with the store (aka state management) to update components
// dumb components: just read props from containers and render components, 
// is just UI view and should not contain logic
// smart components (containers) interact w/ your redux store, fire actions
// from containers, actions call apis, result of 
// action updates the store through a reducer, containers read the store 
// through mapStateToProps function
// as soon as value in store changes it updates the component

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
          <Route path="/users" component={ConnectedUsers}/>
        </Switch>
      </React.Fragment>
    </Provider>
);

export default App;
