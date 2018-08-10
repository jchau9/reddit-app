import * as React from 'react';
import axios from 'axios';

interface IState {
    title: string;
    subreddit: string;
    text: string;
}

class PostForm extends React.Component<{}, IState> {
    state = {
        title: '',
        subreddit: '',
        text: '',
    }

    public render() {
        return (
            <div>
                <h1>Reddit Post</h1>
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
        let url = 'https://oauth.reddit.com/api/submit'
        url += `?sr=${this.state.subreddit}&title=${this.state.title}&kind=self&text=${this.state.text}&resubmit=true&send_replies=true`
        const config = {
            headers: { 'Authorization': `bearer ${sessionStorage.getItem('access_token')}` },
            method: 'POST',
            url
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