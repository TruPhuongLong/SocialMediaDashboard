import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ListComponent } from '../components/list.component';
import { ItemUserComponent } from '../components/item.user.component';
import { getUsersAction } from '../../redux/actions/user.action';
import { getPostsPerUserAction, getAlbumsPerUserAction } from '../../redux/actions/post.action';

class HomePage extends Component {

    componentDidMount() {
        this.props.getUsers();
    }

    _viewListPosts = (user) => {
        const {history, viewListPosts} = this.props;
        history.push('/posts');
        viewListPosts(user);
    }

    _viewListAlbums = (user) => {
        const {history, viewListAlbums} = this.props;
        history.push('/albums');
        viewListAlbums(user);
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
        users: state.userReducer.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUsers: () => {
            getUsersAction()
                .then(action => {
                    dispatch(action);
                })
        },
        viewListPosts: (user) => {
            getPostsPerUserAction(user)
                .then(action => {
                    dispatch(action);
                })
        },
        viewListAlbums: (user) => {
            getAlbumsPerUserAction(user)
                .then(action => {
                    dispatch(action);
                })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(HomePage));