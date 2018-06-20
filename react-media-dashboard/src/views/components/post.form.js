import React, { Component } from 'react';
import { URL_POST_POSTS } from '../../libs/constant';
import {postPost} from '../../services/post.api.service';
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
        const {files, content} = this.state;
        postPost(files, {content})
        .then(post =>console.log('post success', post))
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