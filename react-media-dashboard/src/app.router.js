import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from 'react-router-dom';

import HomePage from './views/pages/home.page';
import PostsPage from './views/pages/posts.page';
import AlbumsPage from './views/pages/albums.page';
import PostForm from './views/components/post.form';
import SignupForm from './views/components/signup.form';

import NavComponent from './views/components/nav.component';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavComponent />

                <Route path="/" exact strict component={HomePage} />

                <Route path="/home" exact strict component={HomePage} />

                <Route path="/posts/:userid" exact strict component={PostsPage} />

                <Route path="/albums/:userid" exact strict component={AlbumsPage} />

                <Route path="/postform" exact strict component={PostForm} />

                <Route path="/signup" exact strict component={SignupForm} />
            </div>
        </Router>
    )
}

// <Prompt when={true} message={(location) => {
//     return location.pathname.startsWith('/posts') ? "you need login" : true;
// }} />