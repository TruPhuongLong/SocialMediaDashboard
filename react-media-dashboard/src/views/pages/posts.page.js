import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { ListComponent } from '../components/list.component';
import { ItemPostComponent } from '../components/item.post.component';

import { getPostsPerUserAction } from '../../redux/actions/post.action';
import { getCommentsAction, postCommentAction } from '../../redux/actions/comment.action';


class PostsPage extends React.Component {

    state = {
        detailItem: null,
    }

    componentDidMount() {
        const { getListPosts, match } = this.props;

        // request server get list post of userid:
        getListPosts(match.params.userid);
    }

    _onDetail = (detailItem) => {
        const { getListComments } = this.props;
        this.setState({ detailItem })
        getListComments(detailItem._id);
    }

    _onSendComment = (comment) => {
        comment.username = this.props.userAuth.username;
        this.props.postComment(comment);
    }

    render() {
        const { user, posts, comments } = this.props;
        const { detailItem } = this.state;
        return (
            <div className="container">
                <h1>List Posts</h1>
                <h3>Post by: {user.username}</h3>
                <i>email: {user.email}</i>
                <hr />

                {
                    detailItem ?
                        <ItemPostComponent
                            item={detailItem}
                            isDetail
                            comments={comments}
                            onSendComment={this._onSendComment}
                        />
                        :
                        <ListComponent
                            itemSource={posts}
                            renderRows={post => (
                                <ItemPostComponent
                                    key={post._id}
                                    item={post}
                                    onDetail={this._onDetail}
                                />
                            )}
                        />
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    const { posts, user } = state.postReducer;
    const { comments } = state.commentReducer;
    const userAuth = state.authReducer.user;
    return {
        posts,
        user,
        comments,
        userAuth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getListPosts: (userid) => {
            console.log('get list post at post page, with user id: ', userid);
            getPostsPerUserAction(userid)
                .then(action => {
                    dispatch(action);
                })
        },
        getListComments: (postid) => {
            return getCommentsAction(postid)
                .then(action => dispatch(action));
        },
        postComment: (model) => {
            return postCommentAction(model)
                .then(action => dispatch(action));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(PostsPage));