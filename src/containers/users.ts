import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from '../store';
import { IUser, UPDATE_USER } from '../store/users';

interface IStateProps {
    users: Record<number, IUser>;
}

const mapStateToProps = (state: IState): IStateProps => ({
    users: state.users.usersDict
});

interface IDispatchProps {
    updateUser: (userId: number, user: IUser) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    updateUser: (userId: number, user: IUser) => dispatch({ type: UPDATE_USER, user, userId })
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector;