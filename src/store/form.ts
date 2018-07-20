import { IUser } from './users';

export interface IState {
    user: IUser;
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
    state: IState = {
        age: "",
        description: "",
        name: "",
        occupation: "",
        user: { name: "", age: "", occupation: "", description: "", userId: 2 },
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