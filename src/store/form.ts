// import { IUser, usersDict } from './users';

export interface IState {
    age: string;
    description: string;
    name: string;
    occupation: string;
};

export const HANDLE_CHANGE = 'HANDLE_CHANGE';

interface IAction {
    type: typeof HANDLE_CHANGE;
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;
};

export default function form(
    state: IState = { // how to pass intial values ???
        age: "",
        description: "",
        name: "",
        occupation: ""
    },
    action: IAction
): IState {
    switch (action.type) {
        case HANDLE_CHANGE:
            return {
                ...state,
                [action.event.currentTarget.name]: action.event.currentTarget.value
            };
        default:
            return state;
    }
}