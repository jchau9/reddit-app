import { connect } from 'react-redux';

import { IState } from '../store';

interface IStateProps {
    isAuthenticated: boolean;
}

const mapStateToProps = (state: IState): IStateProps => ({
    isAuthenticated: state.auth.isAuthenticated
});

const connector = connect(
    mapStateToProps
);

export default connector;