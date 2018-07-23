import { combineReducers, createStore } from 'redux';
import users, { IState as UsersState } from './users';

export interface IState {
    users: UsersState;
};

const rootReducer = combineReducers({
    users
});

const store = createStore(rootReducer);

export default store;