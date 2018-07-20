import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Users from './Users';
import users from './containers/users';

import About from './About';
import Home from './Home';
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

/* interface IState {
  userDict: Record<number, IUser>;
} */

const ConnectedUsers = users(Users);

const App: React.SFC = () => (
  /* public state: IState = {
    userDict: {
      0: { name: 'Ernesto', age: '56', occupation: 'retired gardener', description: 'bad at gardening', userId: 0 },
      1: { name: 'Wallace', age: '36', occupation: 'dogwalker', description: 'walks cats in his free time', userId: 1 },
      2: { name: 'Fabio', age: '23', occupation: 'student', description: 'trying to pay off debt and drink boba', userId: 2 }
    }
  } */

/*   public updateUser = (userId: number, data: IUser) => {
    this.setState(state => {
      return {
        ...state,
        userDict: {
          ...state.userDict,
          [userId]: data
        }
      };
    });
  } */
  <div>
    <Provider store={store}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          path="/users"
          render={props => <ConnectedUsers {...props}/>}
        />
      </Switch>
    </Provider>
  </div>
);

export default App;
