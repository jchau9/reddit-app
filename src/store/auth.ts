export interface IState {
    isAuthenticated: boolean;
};

export const FETCH_TOKEN_REQUEST = 'FETCH_TOKEN_REQUEST'
export const FETCH_TOKEN_SUCCES = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE'

interface IAction {
    type: typeof FETCH_TOKEN_REQUEST;
}

export default function auth(
    state: IState = {
        isAuthenticated: false
    },
    action: IAction
): IState {
    switch (action.type) {
        case FETCH_TOKEN_REQUEST:
            return {
                ...state
            }
    }
}