import * as React from 'react';

interface IProps {
    title: string;
    username: string;
    subReddit: string;
    text: string;
}

interface IState {
    username: string;
    title: string;
    subReddit: string;
    text: string;
}

class PostForm extends React.Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            username: props.username,
            title: props.title,
            subReddit: props.subReddit,
            text: props.text,
        }
    }
    public render() {
        return (
            <div>
                <h1>Reddit Post</h1>
                <h2>Hello {this.state.username} </h2>
                <form onSubmit={this.handleSubmit}>
                    <p>SubReddit</p>
                    <input type="text" name="subreddit" />
                    <p>Title</p>
                    <input type="text" name="title" />
                    <p>Text</p>
                    <textarea name="text" />
                    <br />
                    <button type="submit">
                        Post to Reddit
                    </button>
                </form>
            </div>
        )
    }

    private handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        console.log('submit');
    }
}
export default PostForm;