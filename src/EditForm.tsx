import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { IUser } from './store/users';


interface IProps extends RouteComponentProps<{}> {
    updateUser: (userId: number, user: IUser) => void;
    handleChange: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    age: string;
    description: string;
    name: string;
    occupation: string;
    userId: number;
}

const EditForm: React.SFC<IProps> = ({ updateUser, age, description, name, occupation, userId, handleChange }) => {
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <p>Name:</p>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                <p>Age:</p>
                <input type="text" name="age" defaultValue={age} onChange={handleChange} />
                <p>Occupation:</p>
                <input type="text" name="occupation" defaultValue={occupation} onChange={handleChange} />
                <p>Description:</p>
                <textarea name="description" defaultValue={description} onChange={handleChange} />
                <br />
                <button
                    onClick={() =>
                        alert('click')
                        // updateUser(userId, state)
                    }
                >
                    Submit
                </button>
            </div>
        </div >
    );
};

export default EditForm;