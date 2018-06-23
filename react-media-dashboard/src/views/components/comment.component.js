import React from 'react';

export const CommentComponent = ({item}) => {
    console.log("====", item)
    return (
        <div>
            <h3>{item.username}</h3>
            <i>{new Date(item.createat).toDateString()}</i>
            <p>{item.content}</p>
        </div>
    )
}