import React from 'react';

export const ListComponent = ({ itemSource = [], renderRows = f => f }) => (
    <div style={localStyles.container}>
        {itemSource.map(item =>
            renderRows(item)
        )}
    </div>
)

const localStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    }
}
