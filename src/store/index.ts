import {createStore} from 'redux';
import users, {IState as UsersState} from './users';

export interface IState {
    users: UsersState;
};

const store = createStore(users);

export default store;