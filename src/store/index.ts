import {createStore} from 'redux';
import users, {State as UsersState} from './users';

export type State = {
    users: UsersState;
};

const store = createStore(users);

export default store;