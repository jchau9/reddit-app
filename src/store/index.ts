import { combineReducers, createStore } from 'redux';
import auth, { IState as authState } from './auth';

export interface IState {
    auth: authState;
};

const rootReducer = combineReducers({
    auth
});

const store = createStore(rootReducer);

export default store;