import * as React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import PostForm from './PostForm';

import auth from './containers/auth';
import store from './store';

const ConnectedLogin = auth(Login)

const App: React.SFC = () => (
  <Provider store={store}>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={ConnectedLogin} />
        <Route exact path="/post" component={PostForm} />
      </Switch>
    </React.Fragment>
  </Provider>
);

export default App;
