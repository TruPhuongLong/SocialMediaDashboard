import React , {Component} from 'react';
import {ListComponent} from '../components/list.component';
import {ItemPostComponent} from '../components/item.post.component';
import {getPosts} from '../../services/post.api.service';

export default class PostsPage extends Component{

    state = {
        posts: []
    }

    componentDidMount(){
        getPosts()
        .then(posts => this.setState({posts}))
    }

    render(){
        const {posts} = this.state;
        return (
            <div>
                <h1>Posts Page</h1>
                <ListComponent
                    itemSource={posts}
                    renderRows={post => (
                        <ItemPostComponent
                            key={post._id}
                            item={post}
                        />
                    )}
                />
            </div>
        )
    }
}