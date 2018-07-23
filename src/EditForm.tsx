import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IUser } from './store/users';


interface IProps extends RouteComponentProps<{}> {
    updateUser: (userId: number, user: IUser) => void;
    age: string;
    description: string;
    name: string;
    occupation: string;
    userId: number;
}

interface IState {
    age: string;
    description: string;
    name: string;
    occupation: string;
}

class EditForm extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);

        this.state = {
            age: props.age,
            description: props.description,
            name: props.name,
            occupation: props.occupation,
        };
    }

    public render() {
        return (
            <div>
                <h1>{name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Name:</p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    <p>Age:</p>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />
                    <p>Occupation:</p>
                    <input type="text" name="occupation" value={this.state.occupation} onChange={this.handleChange} />
                    <p>Description:</p>
                    <textarea name="description" value={this.state.description} onChange={this.handleChange} />
                    <br />
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div >
        );
    }

    private handleChange: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
        const { name, value } = event.currentTarget;
        this.setState(state => ({
            ...state,
            [name]: [value]
        }));
    };

    private handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        this.props.updateUser(this.props.userId, {
            ...this.state,
            userId: this.props.userId
        });
    };
}


export default EditForm;