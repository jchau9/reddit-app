import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import EditForm from './EditForm'
import { IUser } from './user'


interface IProps extends RouteComponentProps<{}> {
    users: Record<number, IUser>;
    updateUser: (userId: number, user: IUser) => void;
}

/* const ListDisplay = (props: { users: Record<number, IUser> }) => {
    const values = Object.keys(props.users).map(key => props.users[key]);
    return (
        <div>
            {values.map((user: IUser, i: number) =>
                <li
                    key={"user" + i}
                >
                    <Link
                        to={"/users/" + user.userId}
                    >
                        {user.name}
                    </Link>
                </li>
            )}
        </div>
    );
} */

const Users: React.SFC<IProps> = ({users, updateUser, match}) => {
    const values = Object.keys(users).map(key => users[key]);
    return (
        <div>
            <h1>Users</h1>
            {values.map((user: IUser, i: number) =>
                <li
                    key={"user" + i}
                >
                    <Link
                        to={"/users/" + user.userId}
                    >
                        {user.name}
                    </Link>
                </li>
            )}
            <Route
                path={`${match.path}/:userId`}
                render={props => {
                    return (
                        <EditForm
                            key={`USER_ROUTE_${props.match.params.userId}`}
                            {...props}
                            user={users[props.match.params.userId]}
                            updateUser={updateUser}
                        />
                    );
                }}
            />
        </div >
    );
};

export default Users;
