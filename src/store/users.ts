import { IUser } from '../user'

export type State = {
    usersDict: Record<number, IUser>;
};

export const UPDATE_USER = 'UPDATE_USER';

var usersDict =  {
    0: { name: 'Ernesto', age: '56', occupation: 'retired gardener', description: 'bad at gardening', userId: 0 },
    1: { name: 'Wallace', age: '36', occupation: 'dogwalker', description: 'walks cats in his free time', userId: 1 },
    2: { name: 'Fabio', age: '23', occupation: 'student', description: 'trying to pay off debt and drink boba', userId: 2 }
}

type Action = 
    {
        type: typeof UPDATE_USER;
        user: IUser;
    };
    
function users(
    state: State = {
        usersDict: usersDict
    },
    action: Action
) : State {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                usersDict: {...state.usersDict, [action.user.userId]:action.user}
            };
        default:
            return state;
    }
}

export default users;