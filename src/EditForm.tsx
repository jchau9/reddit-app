import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import {IState as state} from './store';
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

/* interface IState {
    age: string;
    description: string;
    name: string;
    occupation: string;
} */

const EditForm: React.SFC<IProps> = ({ updateUser, age, description, name, occupation, userId, handleChange}) => {
    const state = ({
        age,
        description,
        name,
        occupation,
        userId
    })
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <p>Name:</p>
                <input type="text" name="name" defaultValue={name} onChange={handleChange}/>
                <p>Age:</p>
                <input type="text" name="age" defaultValue={age} onChange={handleChange}/>
                <p>Occupation:</p>
                <input type="text" name="occupation" defaultValue={occupation} onChange={handleChange}/>
                <p>Description:</p>
                <textarea name="description" defaultValue={description} onChange={handleChange}/>
                <br />
                <button
                    onClick={() =>
                        updateUser(userId, state) // how to pass in updated user after onchange?? 
                    }
                >
                    Submit
                </button>
            </div>
        </div >
    );
};

export default EditForm;