import React, { Component } from 'react';

class UncontrolledForm extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }
    handleSubmit = e => {
        e.preventDefault();
        
        console.log(this.state);
        this.setState({name: '', email: '', password: ''})
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name, email, password} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" name="name" value={name} placeholder="Plese Enter your Name" onChange={this.handleChange}/>
                    <input type="email" className="form-control" name="email" value={email} placeholder="example@company.com" onChange={this.handleChange}/>
                    <input type="password" className="form-control" name="password" value={password} placeholder="********" onChange={this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;
