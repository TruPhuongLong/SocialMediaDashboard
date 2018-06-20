import React from 'react';
import { ListComponent } from './list.component';

export const ItemAlbumComponent = ({ itemSource = [], toggle = true }) => {
    return (
        <div>
            {
                toggle ?
                    <img src={itemSource[0]}
                        alt='post image'
                        style={{ width: '400px', height: '400px', objectFit: 'contain' }}
                    />
                    :
                    <ListComponent
                        itemSource={itemSource}
                        renderRows={(imageurl, index) => (
                            <img key={index}
                                src={imageurl}
                                alt='post image'
                                style={{ width: '400px', height: '400px', objectFit: 'contain' }}
                            />
                        )}
                    />
            }

        </div>
    )
}



