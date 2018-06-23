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
                <ul>
                    <li><NavLink to="/" exact activeStyle={{ color: 'green' }}>Home</NavLink></li>
                    <li><NavLink to="/posts" exact activeStyle={{ color: 'green' }}>Post</NavLink></li>
                    <li><NavLink to="/albums" exact activeStyle={{ color: 'green' }}>Albums</NavLink></li>
                    <li><NavLink to="/postform" exact activeStyle={{ color: 'green' }}>Post Form</NavLink></li>
                    <li><NavLink to="/signup" exact activeStyle={{ color: 'green' }}>Signup</NavLink></li>
                </ul>

                <Prompt when={true} message={(location) => {
                    return location.pathname.startsWith('/posts') ? "you need login" : true;
                }} />

                <Route path="/" exact strict component={HomePage} />

                <Route path="/home" exact strict component={HomePage} />

                <Route path="/posts" exact strict component={PostsPage} />

                <Route path="/albums" exact strict component={AlbumsPage} />

                <Route path="/postform" exact strict component={PostForm} />

                <Route path="/signup" exact strict component={SignupForm} />
            </div>
        </Router>
    )
}