import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { parse } from 'query-string';
import { initializeToken } from './actions'

const clientID = 'r-olaTpMhjY8AQ'
const redirectURI = 'http://localhost:3000'

const randomString = (length: number) => {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

const authorizationURL =
    `https://www.reddit.com/api/v1/authorize` +
    `?client_id=${clientID}` +
    `&response_type=code` +
    `&state=${sessionStorage.getItem('authState')}` +
    `&redirect_uri=${redirectURI}` +
    `&duration=permanent` +
    `&scope=submit`

interface IProps extends RouteComponentProps<{}> {
    isAuthenticated: boolean
}

class Login extends React.Component<IProps, {}> {
    componentWillMount() {
        // redirect to '/post' if authentiated
        if (this.props.isAuthenticated) {
            this.props.history.push('/post')
            // if not authenticated, make sure that authState is set
        } else if (!sessionStorage.getItem('authState')) {
            sessionStorage.setItem('authState', randomString(10))
        }
    }

    componentDidMount() {
        // check auth state and fetch OAuth token when
        // redirected back to this page from reddit.com
        const { state, code, error } = parse(this.props.location.search)
        if (state && code) {
            if (state === sessionStorage.getItem('authState')) {
                initializeToken(code)
            } else {
                console.log('Authorization Error: Invalid state.')
            }
            if (state && error) console.log(error)
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.isAuthenticated) {
            sessionStorage.removeItem('authState')
            this.props.history.push('/post')
        }
    }

    public render() {
        return (
            <div>
                <h1>Login</h1>
                <p>Connect to your Reddit account.</p>
                <a href={authorizationURL}>Connect</a>
            </div >
        )
    }

}

export default Login;