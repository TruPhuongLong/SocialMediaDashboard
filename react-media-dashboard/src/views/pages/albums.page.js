import React, { Component } from 'react';
import { ListComponent } from '../components/list.component';
import { ItemAlbumComponent } from '../components/item.album.component';
import { getAlbumsPerUser } from '../../services/post.api.service';

export default class AlbumsPage extends Component {

    state = {
        imageurlses: [],
        user: {}
    }

    componentDidMount() {
        getAlbumsPerUser('5b27c8dddb3d7719c030f40b')
            .then(imageurlses => this.setState({ imageurlses }))
    }

    render() {
        const { imageurlses, user } = this.state;
        return (
            <div>
                <h1>Albums Page</h1>
                <h3>Post by: {user.username}</h3>
                <i>email: {user.email}</i>
                <ListComponent
                    itemSource={imageurlses}
                    renderRows={(imageurls, index) => (
                        <ItemAlbumComponent
                            key={index}
                            itemSource={imageurls}
                        />
                    )}
                />
            </div>
        )
    }
}