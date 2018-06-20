import React from 'react';

export const ItemUserComponent = ({ item, viewListPosts = f => f, viewListAlbums = f => f }) => {
    return (
        <div>
            <h4>{item.username}</h4>
            <p>{item.email}</p>
            <button onClick={() => viewListPosts(item)}>view list posts</button>
            <button onClick={() => viewListAlbums(item)}>view list albums</button>
        </div>

    )
}

