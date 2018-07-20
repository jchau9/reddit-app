import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {State} from '../store';
import { IUser } from '../user'
import {UPDATE_USER} from '../store/users';

const mapStateToProps = (state: State) => ({
    users: state.users.usersDict
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateUser: (user: IUser) => dispatch({type: UPDATE_USER, user})
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default connector;