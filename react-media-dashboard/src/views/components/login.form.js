import React from 'react';

export const LoginForm = ({ onLogin = f => f, onSignup = f => f }) => {

    const _onLogin = (event) => {
        event.preventDefault();
        const email = this.email.value;
        const password = this.password.value;
        onLogin({email, password});
    }

    const _onSignup = (event) => {
        event.preventDefault();
        onSignup();
    }

    return (
        <form className="form-inline">
            <input type="email" placeholder="@email" className="form-control" ref={input => this.email = input}/>
            <input type="password" placeholder="@password" className="form-control" ref={input => this.password = input}/>
            <button className="btn btn-success" onClick={_onLogin}>Login</button>
            <button className="btn btn-primary" onClick={_onSignup}>Signup</button>
        </form>
    )
}