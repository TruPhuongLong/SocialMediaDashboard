import React, { Component } from 'react';

import './App.css';
// import HomePage from './views/pages/home.page';
import PostsPage from './views/pages/posts.page';
import {NavComponent} from './views/components/nav.component';

class App extends Component {
  render() {
    return (
      <div>
        <NavComponent />
        {/* <HomePage /> */}
        <PostsPage />
      </div>
    );
  }
}

export default App;

/**
struct:
* redux.
 *  actions
 *  reducers
 *  store
 *    state: {
 *      users: []
 * 
 *    }
 * views:
 *  pages
 *  components
 * libs
 * services
 * 
 * 
 * 
 * ''
 * REQUIRED:
 * 
● User can view list of users 
● User can view list of posts of each user 
● User can view list of albums of each user 
● User can view the detail of each post and its comment 
● User can view list of photos from an album 
● User can view the detail of photo 
● User can add, edit and delete post 
● User can add, edit and delete comment 
 */
