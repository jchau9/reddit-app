import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from '../store';
import {HANDLE_CHANGE} from '../store/form';
import { IUser, UPDATE_USER } from '../store/users';


interface IStateProps {
    age: string;
    description: string;
    name: string;
    occupation: string;
}

interface IOwnProps {
    userId: number;
}

const mapStateToProps = (state: IState, ownProps: IOwnProps): IStateProps => ({
    age: state.users.usersDict[ownProps.userId].age,
    description: state.users.usersDict[ownProps.userId].description,
    name: state.users.usersDict[ownProps.userId].name,
    occupation: state.users.usersDict[ownProps.userId].occupation
});

interface IDispatchProps {
    updateUser: (userId: number, user: IUser) => void;
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => dispatch({type: HANDLE_CHANGE, event }),
    updateUser: (userId: number, user: IUser) => dispatch({ type: UPDATE_USER, user, userId })
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connector;