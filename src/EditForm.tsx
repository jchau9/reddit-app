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

/* interface IState {
    age: string;
    description: string;
    name: string;
    occupation: string;
} */

// class EditForm extends React.Component<IProps, {}> {
/* constructor(props: IProps) {
    super(props);
    this.state = {
        age: props.user.age,
        description: props.user.description,
        name: props.user.name,
        occupation: props.user.occupation,
    };
} */
const EditForm: React.SFC<IProps> = ({ updateUser, age, description, name, occupation, userId }) => {
    // const handleChange = () => { };
    // make a new class, pass to top level, and let info trickle down to the form
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <p>Name:</p>
                <input type="text" name="name" defaultValue={name} />
                <p>Age:</p>
                <input type="text" name="age" defaultValue={age} />
                <p>Occupation:</p>
                <input type="text" name="occupation" defaultValue={occupation} />
                <p>Description:</p>
                <textarea name="description" defaultValue={description} />
                <br />
                <button
                    onClick={() =>
                        updateUser(userId, this.state)
                    }
                >
                    Submit
                </button>
            </div>
        </div >);
};

/*  private handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 this.setState({ [event.currentTarget.name]: event.currentTarget.value } as Pick<IState, keyof IState>);
} */

export default EditForm;