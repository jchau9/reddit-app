export interface IState {
    isAuthenticated: boolean;
};

export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE'

type IAction = | {
    type: 'FETCH_TOKEN_SUCCESS'
} | {
    type: 'FETCH_TOKEN_FAILURE'
};

export default function auth(
    state: IState = {
        isAuthenticated: Boolean(localStorage.getItem('accessToken'))
    },
    action: IAction
): IState {
    switch (action.type) {
        case FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }
        case FETCH_TOKEN_FAILURE:
            return {
                ...state,
                isAuthenticated: false
            }
        default:
            return state;
    }
}