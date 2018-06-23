import React from 'react';
import { ListComponent } from './list.component';

export const ItemAlbumComponent = ({ itemSource = [] }) => {
    return (
        <div className="container">
            {
                <ListComponent
                    itemSource={itemSource}
                    renderRows={(imageurl, index) => (
                        <img key={index}
                            src={imageurl}
                            alt='post image'
                            style={{ 
                                minWidth: '400px', 
                                width: '400px', 
                                height: '400px', 
                                objectFit: 'fill',
                                display: 'flex',
                            }}
                        />
                    )}
                    style={{
                        flexDirection: 'row',
                        overflowX: 'auto',
                    }}
                />
            }

        </div>
    )
}



