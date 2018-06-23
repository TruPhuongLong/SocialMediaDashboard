import React from 'react';

export const WelcomeComponent = ({user, onLogout = f=>f, onAddPost = f=>f}) => {
    return (
        <div className="inline">
            <h4 className="space white">welcome {user.username}!!</h4>
            <button className="btn btn-success" onClick={onAddPost}>Add Post</button>
            <button className="btn btn-primary" onClick={onLogout}>Logout</button>
        </div>
    )
}