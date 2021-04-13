import React, { Component } from 'react';
import Form from './Form';

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDay: '',
    gender: ''
}

class SignUpForm extends Component {

    state = {
        values: initValues,
        agreement: false
    }

    handleChange = e => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }
    handleAgreement = e => {
        this.setState({
            agreement: e.target.checked
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.values);

        e.target.reset();
        this.setState({values: initValues, agreement: false})
    }
    render() {
        return (
            <div>
                <h1>Sign up form</h1>
                <Form 
                values={this.state.values} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                agreement={this.state.agreement}
                handleAggrement={this.handleAgreement}
                />
            </div>
        );
    }
}

export default SignUpForm;
