import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { IUser } from './user';
import { Provider } from 'react-redux';
import store from './store';

import About from './About';
import Home from './Home';
// import Context from './UserContext';
import Users from './Users';

interface IState {
  userDict: Record<number, IUser>;
}

class App extends React.Component<{}, IState> {
  public state: IState = {
    userDict: {
      0: { name: 'Ernesto', age: '56', occupation: 'retired gardener', description: 'bad at gardening', userId: 0 },
      1: { name: 'Wallace', age: '36', occupation: 'dogwalker', description: 'walks cats in his free time', userId: 1 },
      2: { name: 'Fabio', age: '23', occupation: 'student', description: 'trying to pay off debt and drink boba', userId: 2 }
    }
  }

  public updateUser = (userId: number, data: IUser) => {
    this.setState(state => {
      return {
        ...state,
        userDict: {
          ...state.userDict,
          [userId]: data
        }
      };
    });
  }

  public render() {
    return (
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
              render={props => <Users {...props} users={this.state.userDict} />} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
