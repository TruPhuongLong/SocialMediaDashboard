import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ImageComponent } from './image.component';
import { postPostsAction } from '../../redux/actions/post.action';

class PostForm extends Component {
    state = {
        content: '',
        files: [],
        imagePreviewUrls: []
    }

    _onChange = (event) => {
        const content = event.target.value;
        this.setState({
            content
        })
    }

    onFileChange(event) {
        const file = event.target.files[0];
        this.previewImage(file);
        this.setState({
            files: [...this.state.files, file]
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const { files, content } = this.state;
        const { user, postPosts } = this.props;
        postPosts(user, { content }, files)
            .then(_ => {
                this.setState({
                    content: '',
                    files: [],
                    imagePreviewUrls: []
                })
            })
    }

    previewImage(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrls: [...this.state.imagePreviewUrls, reader.result]
            });
        }
        reader.readAsDataURL(file)
    }

    _remove = (index) => {
        console.log(index);
        const files = this.state.files.filter((_, _index) => _index != index);
        const imagePreviewUrls = this.state.imagePreviewUrls.filter((_, _index) => _index != index);
        this.setState({
            files,
            imagePreviewUrls,
        })
    }

    render() {
        const { imagePreviewUrls, content } = this.state;
        return (
            <div>
                <button onClick={() => this.fileinput.click()} className="btn btn-primary space">Add Image</button>
                <button onClick={this.onSubmit.bind(this)} className="btn btn-success space">Save</button>
                <textarea
                    placeholder='@content'
                    className="form-control"
                    value={content}
                    onChange={this._onChange}
                />
                <input type='file'
                    onChange={this.onFileChange.bind(this)}
                    style={{ display: 'none' }}
                    ref={fileinput => this.fileinput = fileinput}
                />
                <div className="inline">
                    {
                        imagePreviewUrls.map((url, index) => {
                            return <ImageComponent src={url} index={index} key={index} remove={this._remove} />
                        })
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        postPosts: (user, model, files) => {
            return postPostsAction(user, model, files)
                .then(action => dispatch(action));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PostForm);