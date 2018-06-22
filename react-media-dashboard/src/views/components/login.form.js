import React from 'react';

export const LoginForm = () => {
    return (
        <form className="form-inline">
            <input type="text" placeholder="@username" className="form-control" />
            <input type="password" placeholder="@password" className="form-control" />
            <button className="btn btn-success">Login</button>
            <button className="btn btn-primary">Signup</button>
        </form>
    )
}