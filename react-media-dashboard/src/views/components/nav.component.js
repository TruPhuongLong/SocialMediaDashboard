import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { LoginForm } from './login.form';
import { login } from '../../services/auth.service';

const NavComponent = ({ history }) => {

    const _onLogin = (model) => {
        console.log(model);
        login(model)
            .then(res => console.log(res));
    }

    const _onSignup = () => {
        history.push('/signup')
    }

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <NavLink to="/" exact className="navbar-brand">Home</NavLink>
                </div>
                <div className="navbar-form navbar-right">
                    <LoginForm
                        onLogin={_onLogin}
                        onSignup={_onSignup}
                    />
                </div>
            </div>
        </nav>
    )
}

export default withRouter(NavComponent);