import React, { Component } from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store/store';

import './App.css';
import HomePage from './views/pages/home.page';
import PostsPage from './views/pages/posts.page';
import AlbumsPage from './views/pages/albums.page';
import {NavComponent} from './views/components/nav.component';
import PostForm from './views/components/post.form';

class App extends Component {
  render() {
    return (
      // <div>
      //   <NavComponent />
      //   <HomePage />
      //   <PostsPage />
      //   <AlbumsPage />
      //   <PostForm />
      // </div>
      <Provider store={store}>

      </Provider>
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
● User can view list of users -> ok
● User can view list of posts of each user -> ok
● User can view list of albums of each user -> ...ok
● User can view the detail of each post and its comment 
● User can view list of photos from an album 
● User can view the detail of photo 
● User can add, edit and delete post -> add ok, 
● User can add, edit and delete comment 
 */
