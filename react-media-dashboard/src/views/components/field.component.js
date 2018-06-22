import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Field extends Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validates: PropTypes.arrayOf(PropTypes.func),
        onChange: PropTypes.func.isRequired,
        className: PropTypes.string,
    };

    state = {
        value: this.props.value,
        errors: false
    }

    componentWillReceiveProps(update) {
        this.setState({ value: update.value })
    }

    _onChange = (event) => {
        const { name, validates, onChange } = this.props;
        const value = event.target.value;
        const errors = validates && validates.length ? validates.map(validate => validate(value)) : false;
        this.setState({ value, errors });
        onChange({ name, value, errors });
    }

    render() {
        const { type, placeholder, name, className } = this.props;
        const { value, errors } = this.state;
        return (
            <div>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className={className}
                    value={value}
                    onChange={this._onChange}
                />
                {
                    errors && errors.length ?
                        errors.map(error => {
                            <span style={{ color: 'red' }}>{error}</span>
                        }) :
                        null
                }
            </div>
        )
    }
}