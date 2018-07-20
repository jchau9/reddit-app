// import { IUser, usersDict } from './users';

// export interface IState {
//     user: IUser;
//     age: string;
//     description: string;
//     name: string;
//     occupation: string;
// };

// export const HANDLE_CHANGE = 'HANDLE_CHANGE';

// interface IAction {
//     type: typeof HANDLE_CHANGE;
//     event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>;
// };

// export default function form(
//     state: IState = {
//         age: usersDict[0].age, // get individual user's props
//         description: usersDict[0].description,
//         name: usersDict[0].name,
//         occupation: usersDict[0].occupation,
//         user: usersDict[props.match.params.userId], // get individual user from users
//     },
//     action: IAction
// ): IState {
//     switch (action.type) {
//         case HANDLE_CHANGE:
//             return {
//                 ...state,
//                 [action.event.currentTarget.name]: action.event.currentTarget.value
//             };
//         default:
//             return state;
//     }
// }