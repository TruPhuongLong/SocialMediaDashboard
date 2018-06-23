import React from 'react';

export class CommentForm extends React.Component {
    state = {
        content: ''
    }

    _onChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    _onSend = () => {
        const {onSend} = this.props;
        onSend(this.state);
    }

    render() {
        const { content } = this.state;
        return (
            <div className="form-group">
                <input
                    placeholder="@your comment"
                    value={content}
                    onChange={this._onChange}
                    className="form-control"
                />
                <br />
                <button
                    onClick={this._onSend}
                    disabled={!content}
                    className="btn btn-success"
                >Send</button>
            </div>
        )
    }
}