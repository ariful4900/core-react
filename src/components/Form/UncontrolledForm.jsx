import React, { Component } from 'react';

class UncontrolledForm extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {}
        data.name = e.target.name.value;
        data.email = e.target.email.value;
        data.password = e.target.password.value;
        console.log(data);
        e.target.reset();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control" name="name" placeholder="Plese Enter your Name" />
                    <input type="email" className="form-control" name="email" placeholder="example@company.com" />
                    <input type="password" className="form-control" name="password" placeholder="********" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;
