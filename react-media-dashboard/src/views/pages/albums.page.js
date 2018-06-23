import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import { ListComponent } from '../components/list.component';
import { ItemAlbumComponent } from '../components/item.album.component';


const AlbumsPage = ({ imageurlses, user }) => {
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


const mapStateToProps = (state) => {
    const {user, imageurlses} = state.postReducer;
    return {
        user,
        imageurlses,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(AlbumsPage));