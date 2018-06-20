import React, { Component } from 'react';
import { URL_POST_POSTS } from '../../libs/constant';
import axios from 'axios';

export default class PostForm extends Component {
    state = {
        content: 'something',
        files: []
    }

    onFileChange(event) {
        this.setState({
            files: [...this.state.files, event.target.files[0]]
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const fd = new FormData();
        const { content, files } = this.state;
        fd.append('content', content);
        // importance: name files must be the same in multer:
        // example: single('img') -> fd.append('img', file);
        fd.append('files', files[0]);
        fd.append('files', files[1]);
        fd.append('userid', '5b27c8dddb3d7719c030f40b');
        axios.post(URL_POST_POSTS, fd)
            .then(post => console.log(post))
            .catch(error => console.log(error));
    }

    render() {
        const { onSubmit } = this.props;
        return (
            <form onSubmit={this.onSubmit.bind(this)} >
                <textarea placeholder='@content' />
                <br />
                <input type='file' onChange={this.onFileChange.bind(this)} />
                <br />
                <button type='submit'>Save</button>
            </form>
        )
    }
}