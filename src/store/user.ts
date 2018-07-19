export type State = {
    name: string;
    age: string;
    occupation: string;
    description: string;
};

type Action = 
    | {
        type: 'EDIT'
    }

export default function user(
    state: State = {
        name: "",
        age: "",
        description: "",
        occupation: ""
    },
    action: Action
) : State {
    return state
}