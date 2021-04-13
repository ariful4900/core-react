import React, { Component } from 'react';
import Form from './Form';
import PropTypes from 'prop-types'

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
        errors: '',
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
            agreement: e.target.checked,

        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, isValid } = this.validate()
        if (isValid) {
            this.props.createUser(this.state.values)
            e.target.reset();
            this.setState({ values: initValues, agreement: false , errors: {}})
        } else {
           this.setState({errors})
        }

    }



    validate = () => {
        const errors = {}
        const { values: { name, email, password, gender, birthDay } } = this.state;

        if (!name) {
            errors.name = 'Please Provite Your Name'
        } else if (name.length > 30) {
            errors.name = 'Name Must be between 30 Charecter'
        }

        if (!email) {
            errors.email = 'Plase Provide your email Address'
        }
        if (!password) {
            errors.password = 'Plase Provide A password'
        }
        if (!birthDay) {
            errors.birthDay = 'Plase Provide Your exact Date of Birth'
        }
        if (!gender) {
            errors.gender = 'Plase Select Your Gender'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
    render() {
        return (
            <div>
                <h1>Sign up form</h1>
                <Form
                    values={this.state.values}
                    errors ={this.state.errors}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    agreement={this.state.agreement}
                    handleAggrement={this.handleAgreement}
                />
            </div>
        );
    }

}
SignUpForm.propTypes= {
    createUser: PropTypes.func.isRequired,
}
export default SignUpForm;
