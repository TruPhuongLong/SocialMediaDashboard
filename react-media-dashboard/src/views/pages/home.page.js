import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ListComponent } from '../components/list.component';
import { ItemUserComponent } from '../components/item.user.component';
import { getUsersAction } from '../../redux/actions/user.action';
import { setUserOfPostsAction, getAlbumsPerUserAction } from '../../redux/actions/post.action';

class HomePage extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    _viewListPosts = (user) => {
        const {history, setUserOfPosts} = this.props;

        // update user of this list post: for post page show detail user.
        setUserOfPosts(user);

        // push to post page: with userid:
        history.push(`/posts/${user._id}`);
    }

    _viewListAlbums = (user) => {
        const {history, setUserOfPosts} = this.props;

        // update user of this list post: for post page show detail user.
        setUserOfPosts(user);

        // push to album page: with userid:
        history.push(`/albums/${user._id}`);
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <h1>Home Page</h1>
                <ListComponent
                    itemSource={users}
                    renderRows={user => (
                        <ItemUserComponent
                            key={user._id}
                            item={user}
                            viewListPosts={this._viewListPosts}
                            viewListAlbums={this._viewListAlbums}
                        />
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users, // for update list user:
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // get list of user:
        getUsers: () => {
            getUsersAction()
                .then(action => {
                    dispatch(action);
                })
        },

        // for update current user of list post or album:
        setUserOfPosts: (user) => {
            dispatch(setUserOfPostsAction(user));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(HomePage));