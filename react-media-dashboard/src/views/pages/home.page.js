import React, { Component } from 'react';
import { ListComponent } from '../components/list.component';
import { ItemUserComponent } from '../components/item.user.component';
import {getUsers} from '../../services/auth.service';

export default class HomePage extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        getUsers()
            .then(users => this.setState({ users }));
    }

    viewListPosts(user){
        console.log('viewListPosts', user)
    }

    viewListAlbums(user){
        console.log('viewListAlbums', user)
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <h1>Home Page</h1>
                <ListComponent
                    itemSource={users}
                    renderRows={user => (
                        <ItemUserComponent
                            key={user._id}
                            item={user}
                            viewListPosts={this.viewListPosts}
                            viewListAlbums={this.viewListAlbums}
                        />
                    )}
                />
            </div>
        )
    }
}

