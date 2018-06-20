import React from 'react';

export const ItemPostComponent = ({ item }) => {
    return (
        <div>
            <p>{item.content}</p>
            <i>{item.createat}</i>
            <i>{item.editat}</i>
            <img src={item.imageurls[0]} alt='post image' style={{width: '400px', height: '400px', objectFit: 'contain'}}/>
        </div>
    )
}



