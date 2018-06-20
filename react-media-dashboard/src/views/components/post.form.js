import React, {Component} from 'react';

export default class PostForm extends Component {
    state = {
        content: '',
        files: []
    }

    onFileChange(event){
        console.log(event.target.files[0]);
        this.setState({
            files: [...this.state.files, event.target.files[0]]
        })
    }

    onSubmit(event){
        event.preventDefault();
        console.log('onsubmit')
        const fd = new FormData();
        const {content, files} = this.state;
        fd.append('content', content);
        fd.append('files', files);
        
    }

    render(){
        const {onSubmit} = this.props;
        return (
            <form onSubmit={this.onSubmit}>
                <textarea placeholder='@content' />
                <br />
                <input type='file' onChange={this.onFileChange}/>
                <br />
                <button type='submit'>Save</button>
            </form>
        )
    }
}