import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IUser } from './store/users';

interface IProps extends RouteComponentProps<{}> {
    user: IUser;
    updateUser: (userId: number, user: IUser) => void;
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    age: string;
    description: string;
    name: string;
    occupation: string;
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
const EditForm: React.SFC<IProps> = ({ user, updateUser, handleChange, age, description, name, occupation }) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <p>Name:</p>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <p>Age:</p>
                <input type="text" name="age" value={age} onChange={handleChange} />
                <p>Occupation:</p>
                <input type="text" name="occupation" value={occupation} onChange={handleChange} />
                <p>Description:</p>
                <textarea name="description" value={description} onChange={handleChange} />
                <br />
                <button
                    onClick={() =>
                        updateUser(user.userId, { ...user, userId: user.userId })
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