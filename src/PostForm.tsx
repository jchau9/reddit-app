import * as React from 'react';
import axios from 'axios';

interface IState {
    title: string;
    username: string;
    subreddit: string;
    text: string;
}

class PostForm extends React.Component<{}, IState> {
    state = {
        username: '',
        title: '',
        subreddit: '',
        text: '',
    }

    public render() {
        return (
            <div>
                <h1>Reddit Post</h1>
                <h2>Hello {this.state.username} </h2>
                <form onSubmit={this.handleSubmit}>
                    <p>SubReddit</p>
                    <input type="text" name="subreddit" value={this.state.subreddit} onChange={this.handleChange} />
                    <p>Title</p>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <p>Text</p>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                    <br />
                    <button type="submit">
                        Post to Reddit
                    </button>
                </form>
            </div>
        )
    }

    private postToReddit = () => {
        const config = {
            baseURL: 'https://oauth.reddit.com/api/submit',
            headers: { 'Authorization': `bearer ${localStorage.getItem('access_token')}` },
            method: 'POST',
            data: {
                'title': this.state.title,
                'text': this.state.text,
                'sr': this.state.subreddit
            }
        }
        axios(config).then(res => { console.log(res); console.log(res.data); })
    }

    private handleChange: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
        const { name, value } = event.currentTarget;
        this.setState(state => ({
            ...state,
            [name]: [value]
        }))
    };

    private handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        this.postToReddit();
    }
}
export default PostForm;