import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import EditForm from './EditForm'
import { IUser } from './user'

interface IProps extends RouteComponentProps<{}> {
    users: Record<number, IUser>;
    updateUser: (userId: number, user: IUser) => void;
}

const ListDisplay = (props: { users: Record<number, IUser> }) => {
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
}

class Users extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <h1>Users</h1>
                <ListDisplay users={this.props.users} />
                <Route
                    path={`${this.props.match.path}/:userId`}
                    render={props => {
                        return (
                            <EditForm
                                key={`USER_ROUTE_${props.match.params.userId}`}
                                {...props}
                                user={this.props.users[props.match.params.userId]}
                            />
                        );
                    }}
                />
            </div >
        );
    }
};

export default Users;
