import {createStore} from 'redux';
import user, {State as UserState} from './user';

export type State = {
    user: UserState;
};

const store = createStore(user);

export default store;