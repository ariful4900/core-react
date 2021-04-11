import React, { Component } from 'react';

class Input extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const {name, country, bio, birthDay} = this.state
        return (
            <div>
                <h1>Inputs</h1>
                <input className="form-control my-2" type="text" name="name" onChange={this.handleChange} value={name} placeholder="Enter Your Name" />
                <select className="form-control my-2" name="country" onChange={this.handleChange} id="" value={country}>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                </select>
                <textarea className="form-control my-2" name="bio" onChange={this.handleChange} id="" cols="30" rows="10" placeholder="Tell Me About Yourself" value={bio}></textarea>
                <input className="form-control my-2" type="date" onChange={this.handleChange} name="birthDay" value={birthDay}/>
                <button onClick={()=>console.log(this.state)}>Show Data</button>
            </div>
        );
    }
}

export default Input;
