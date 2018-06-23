import React from 'react';

export const ListComponent = ({ itemSource = [], renderRows = f => f, style }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        ...style
    }}>
        {itemSource.map((item, index) =>
            renderRows(item, index)
        )}
    </div>
)
