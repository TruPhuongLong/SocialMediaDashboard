import React from 'react';

export const ImageComponent = ({ src, index, remove = f => f }) => {
    return (
        <div className="column" style={{ padding: '5px' }}>
            <img src={src} alt={index} style={{ objectFit: 'cover', width: '200px', height: "200px" }} />
            <button onClick={() => remove(index)} >Remove</button>
        </div>
    )
}