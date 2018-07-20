import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from '../store';
import { HANDLE_CHANGE } from '../store/form';

interface IStateProps {
    age: string;
    description: string;
    name: string;
    occupation: string;
}

const mapStateToProps = (state: IState): IStateProps => ({
    age: state.form.age,
    description: state.form.description,
    name: state.form.name,
    occupation: state.form.occupation
});

interface IDispatchProps {
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => dispatch({ type: HANDLE_CHANGE, event })
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default connector;