import React, { Component } from 'react';

class Input extends Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthDay: '',
        gender: '',
        agree: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    handleCheckbox=(e)=>{
        this.setState({
            agree: e.target.checked
        })
    }
    render() {
        const {name, country, bio, birthDay, agree, gender} = this.state
        return (
            <div>
                <h1>Inputs</h1>
                <input className="form-control my-2" type="text" name="name" onChange={this.handleChange} value={name} placeholder="Enter Your Name" />
                <select className="form-control my-2" name="country" onChange={this.handleChange} id="" value={country}>
                    <option >Select Your Country</option>
                    <option value="Bangladesh"  >Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="China">China</option>
                </select>
                <textarea className="form-control my-2" name="bio" onChange={this.handleChange} id="" cols="30" rows="10" placeholder="Tell Me About Yourself" value={bio}></textarea>
                <input className="form-control my-2" type="date" onChange={this.handleChange} name="birthDay" value={birthDay}/>
                <div>
                    <input type="radio" name="gender" value="Male" onChange={this.handleChange}/>Male 
                    <input type="radio" name="gender" value="Female" onChange={this.handleChange}/>Female 
                    <input type="radio" name="gender" value="Other" onChange={this.handleChange}/>Others 
                </div>
                <div>
                    <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckbox}/> I am agree this conditions
                </div>
                <button onClick={()=>console.log(this.state)}>Show Data</button>
            </div>
        );
    }
}

export default Input;
