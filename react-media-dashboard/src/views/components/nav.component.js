import React from 'react';

import { LoginForm } from './login.form';

export const NavComponent = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Home</a>
                </div>
                <div className="navbar-form navbar-right">
                    <LoginForm />
                </div>
            </div>
        </nav>
    )
}