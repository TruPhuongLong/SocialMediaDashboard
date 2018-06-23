import React from 'react';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';

import { ListComponent } from '../components/list.component';
import { ItemPostComponent } from '../components/item.post.component';

const PostsPage = ({ posts, user }) => {
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


const mapStateToProps = (state) => {
    const {posts, user} = state.postReducer;
    return {
        posts,
        user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(PostsPage));