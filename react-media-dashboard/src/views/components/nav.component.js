import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { LoginForm } from './login.form';
import { WelcomeComponent } from './welcome.component';
import { loginAction, logoutAction } from '../../redux/actions/auth.action';
import { setUserOfPostsAction } from '../../redux/actions/post.action';

const NavComponent = ({ history, islogin, user, onLogin, onLogout, setUserOfPosts }) => {
    //Login component:
    const _onLogin = (model) => {
        onLogin(model);
    }

    const _onSignup = () => {
        history.push('/signup')
    }

    //welcome compoent:
    const _onLogout = () => {
        onLogout();
    }

    const _onAddPost = () => {
        history.push('/postform');
    }

    const _setUserOfPosts = () => {
        // set user for list posts to get user detail in post page:
        setUserOfPosts(user);
    }

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink to="/" exact className="navbar-brand">Home</NavLink>
                    {
                        islogin ?
                            <NavLink
                                to={`/posts/${user._id}`}
                                onClick={_setUserOfPosts}
                                exact
                                className="navbar-brand"
                            >
                                Your Posts
                            </NavLink>
                            : null
                    }

                    {
                        islogin ?
                            <NavLink to={`/albums/${user._id}`}
                                onClick={_setUserOfPosts}
                                exact
                                className="navbar-brand"
                            >
                                Your Albums
                            </NavLink>
                            : null
                    }
                </div>
                <div className="navbar-form navbar-right">
                    {
                        islogin ?
                            <WelcomeComponent
                                user={user}
                                onAddPost={_onAddPost}
                                onLogout={_onLogout}
                            /> :
                            <LoginForm
                                onLogin={_onLogin}
                                onSignup={_onSignup}
                            />

                    }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    const { islogin, user } = state.authReducer;
    return {
        islogin,
        user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (user) => {
            loginAction(user)
                .then(action => dispatch(action));
        },
        onLogout: () => {
            logoutAction()
                .then(action => dispatch(action));
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
)(withRouter(NavComponent));