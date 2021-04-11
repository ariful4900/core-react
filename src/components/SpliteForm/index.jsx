import React, { Component } from 'react';
import Form from './Form';
//End of Input Elements



class SplitForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state);
        this.setState({ name: '', email: '', password: '' })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Form
                    values ={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default SplitForm;
