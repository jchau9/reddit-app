import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from '../store';
import { IUser, UPDATE_USER } from '../store/users';


const mapStateToProps = (state: IState) => ({
    users: state.users.usersDict
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateUser: (userId: number, user: IUser) => dispatch({ type: UPDATE_USER, user, userId })
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector;