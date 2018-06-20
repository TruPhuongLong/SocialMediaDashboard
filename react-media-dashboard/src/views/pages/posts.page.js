import React, { Component } from 'react';
import { ListComponent } from '../components/list.component';
import { ItemPostComponent } from '../components/item.post.component';
import { getPostsPerUser } from '../../services/post.api.service';

export default class PostsPage extends Component {

    state = {
        posts: [],
        user: {}
    }

    componentDidMount() {
        getPostsPerUser('5b27c8dddb3d7719c030f40b')
            .then(posts => this.setState({ posts }))
    }

    render() {
        const { posts, user } = this.state;
        return (
            <div>
                <h1>Posts Page</h1>
                <h3>Post by: {user.username}</h3>
                <i>email: {user.email}</i>
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