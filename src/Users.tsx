import * as React from 'react';
import { Link, Route, RouteComponentProps } from 'react-router-dom';
import form from './containers/form';
import EditForm from './EditForm';
import { IUser } from './store/users';

const ConnectedForm = form(EditForm);

interface IProps extends RouteComponentProps<{}> {
    users: Record<number, IUser>;
}

const Users: React.SFC<IProps> = ({ users, match }) => {
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
                render={(props) => 
                    <ConnectedForm 
                        key={`USER_ROUTE_${props.match.params.userId}`}
                        {...props} 
                        userId={props.match.params.userId} 
                    />}
            />
        </div >
    );
};
export default Users;
