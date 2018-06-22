import React from 'react';
import Field from './field.component';

export default class SignupForm extends React.Component {

    state = {
        fields: {
            username: '',
            email: '',
            password: '',
            passwordConf: ''
        },
        fieldErrors: {}
    }

    _onSubmit(event) {
        event.preventDefault();
        const fieldErrors = this.validate(this.state.fields);
        this.setState({fieldErrors})
        if(Object.keys(fieldErrors).length) return;
        // good to go:
        console.log('good to go')
    }

    onInputChanged = (event) => {
        const {fields} = this.state;
        fields[event.target.name] = event.target.value;
        this.setState({ fields })
    }

    validate = (user) => {
        const errors = {};
        if(!user.username) errors.username = 'UserName Required';
        if(!user.email) errors.email = 'Email Required';
        if(!user.password) errors.password = 'Password Required';
        if(!user.passwordConf) errors.passwordConf = 'PasswordConf Required';
        return errors;
    }

    render() {
        const { username, email, password, passwordConf } = this.state.fields;
        const {fieldErrors} = this.state;
        return (
            <form className="form-horizontal" onSubmit={this._onSubmit.bind(this)}>
                <div className="form-group">
                    <label className="col-sm-2" > UserName: </label>
                    <div className="col-sm-10">
                        <Field type="text"
                            placeholder="@username"
                            className="form-control"
                            name="username"
                            value={username}
                            onChange={this.onInputChanged}
                        />
                        <span style={{color: 'red'}}>{fieldErrors.username}</span>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2" > Email: </label>
                    <div className="col-sm-10">
                        <Field type="email"
                            placeholder="@email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={this.onInputChanged}
                        />
                        <span style={{color: 'red'}}>{fieldErrors.email}</span>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2" > Password: </label>
                    <div className="col-sm-10">
                        <Field type="password"
                            placeholder="@password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={this.onInputChanged}
                        />
                        <span style={{color: 'red'}}>{fieldErrors.password}</span>
                    </div>
                </div>

                <div className="form-group">
                    <label className="col-sm-2" > Confirm Password: </label>
                    <div className="col-sm-10">
                        <Field type="password"
                            placeholder="@Confirm Password"
                            className="form-control"
                            name="passwordConf"
                            value={passwordConf}
                            onChange={this.onInputChanged}
                        />
                        <span style={{color: 'red'}}>{fieldErrors.passwordConf}</span>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        )
    }
}