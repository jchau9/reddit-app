import * as React from 'react';
// import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import PostForm from './PostForm';

// import store from './store';

const App: React.SFC = () => (
  // <Provider store={store}>
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/post" component={PostForm} />
    </Switch>
  </React.Fragment>
  // </Provider>
);

export default App;
