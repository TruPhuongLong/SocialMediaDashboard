import React from 'react';
import { isEmail } from 'validator';

import Field from './field.component';
import { signup } from '../../services/auth.service';

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
        signup(this.state.fields)
            .then(res => console.log(res));
    }

    onInputChanged = ({ name, value, errors }) => {
        const { fields, fieldErrors } = this.state;
        fields[name] = value;
        if (errors) {
            fieldErrors[name] = errors;
        } else {
            delete fieldErrors[name];
        }
        this.setState({ fields, fieldErrors })
    }

    render() {
        const { username, email, password, passwordConf } = this.state.fields;
        const { fieldErrors } = this.state;
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
                            validates={[
                                (val) => val ? null : 'username required',
                                (val) => val.length > 3 ? null : 'username must atleast 3 character'
                            ]}
                        />
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
                            validates={[
                                (val) => isEmail(val) ? null : 'email invalid'
                            ]}
                        />
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
                            validates={[
                                (val) => val.length >= 6 ? null : 'password must atleast 6 character'
                            ]}
                        />
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
                            validates={[
                                (val) => val.length >= 6 ? null : 'passwordConf must atleast 6 character',
                                val => val === password ? null : 'passwordConf invalid'
                            ]}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary" disabled={Object.keys(fieldErrors).length}>Signup</button>
            </form>
        )
    }
}