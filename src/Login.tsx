import * as React from 'react';
import { RouteComponentProps} from 'react-router-dom';
import { parse } from 'query-string';

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
    `&state=${localStorage.getItem('authState')}` +
    `&redirect_uri=${redirectURI}` +
    `&duration=permanent` +
    `&scope=submit`

class Login extends React.Component<RouteComponentProps<{}>, {}> {
    state = {
        loading: false,
        token: null,
        error: null,
        isAuthenticated: false,
    }

    componentWillMount() {
        // redirect to '/post' if authentiated
        if (this.state.isAuthenticated) {
            this.props.history.push('/post');
            // if not authenticated, make sure that authState is set
        } else if (!localStorage.getItem('authState')) {
            localStorage.setItem('authState', randomString(10))
        }
    }
    
    async componentDidMount() {
        // check auth state and fetch OAuth token when
        // redirected back to this page from reddit.com
        const { state, code, error } = parse(this.props.location.search)
        if (state && code) {
            if (state === localStorage.getItem('authState')) {
                let url = `https://www.reddit.com/api/v1/access_token`
                this.setState(state => ({...state, loading: true}));
                try{
                    const res = await fetch(url, {
                        method: 'POST',
                        body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectURI}`,
                    });
                    const json = await res.json();
                    this.setState(state => ({...state, loading: false, token: json.message, isAuthenticated: true}));
                } catch (e) {
                    this.setState(state => ({...state, loading: false, err:e}));
                }
                console.log(code);
                console.log(this.state.token);
                this.props.history.push('/post');
            } else {
                console.log('Authorization Error: Invalid state.')
            }
        }    
        if (state && error) console.log(error)
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