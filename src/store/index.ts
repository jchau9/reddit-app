import { combineReducers, createStore } from 'redux';
// import form, { IState as FormState } from './form';
import users, { IState as UsersState } from './users';

export interface IState {
    // form: FormState;
    // hello
    users: UsersState;
};

const rootReducer = combineReducers({
    // form,
    users
});

const store = createStore(rootReducer);

export default store;