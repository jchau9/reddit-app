import { connect } from 'react-redux';

import { IState } from '../store';
import { IUser } from '../store/users';

interface IStateProps {
    users: Record<number, IUser>;
}

const mapStateToProps = (state: IState): IStateProps => ({
    users: state.users.usersDict
});

const connector = connect(
    mapStateToProps
);

export default connector;