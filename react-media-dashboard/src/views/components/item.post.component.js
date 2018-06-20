import React from 'react';
import {ItemAlbumComponent} from './item.album.component';

export const ItemPostComponent = ({ item }) => {
    return (
        <div>
            <p>content: {item.content}</p>
            <i>create at: {item.createat}</i>
            <i>edit at: {item.editat}</i>
            <ItemAlbumComponent 
                itemSource={item.imageurls}
            />
        </div>
    )
}



