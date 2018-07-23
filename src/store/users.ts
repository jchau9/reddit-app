export interface IUser {
    name: string;
    age: string;
    occupation: string;
    description: string;
    userId: number;
}

export interface IState {
    usersDict: Record<number, IUser>;
};

export const UPDATE_USER = 'UPDATE_USER';

export const usersDict = {
    0: { name: 'Ernesto', age: '56', occupation: 'retired gardener', description: 'bad at gardening', userId: 0 },
    1: { name: 'Wallace', age: '36', occupation: 'dogwalker', description: 'walks cats in his free time', userId: 1 },
    2: { name: 'Fabio', age: '23', occupation: 'student', description: 'trying to pay off debt and drink boba', userId: 2 }
};

interface IAction {
    type: typeof UPDATE_USER;
    user: IUser;
    userId: number;
};

export default function users(
    state: IState = {
        usersDict: (usersDict)
    },
    action: IAction
): IState {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                usersDict: { ...state.usersDict, [action.userId]: action.user }
            };
        default:
            return state;
    }
}