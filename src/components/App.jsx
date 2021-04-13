import React, { Component } from 'react';
import classes from './app.module.css';
import SignUpForm from './SignUpForm';
// import UncontrolledForm from './Form/UncontrolledForm';
// import ControlledForm from './Form/ControlledForm';
// import SplitForm from './SpliteForm';
// import Input from './Inputs'

class App extends Component {
    state = {
        users: []
    }
    createUser = user => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render() {
        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Working with Forms in React</h1>
                <hr />
                {/* <Input/> */}
                {/* <UncontrolledForm/> */}
                {/* <ControlledForm/> */}
                {/* <SplitForm/> */}
                <SignUpForm createUser={this.createUser} />
                <div className="my-5">
                    <h3>All Resgister Users</h3>
                    <ul className="list-group">
                        {this.state.users.map(user => (<li key={user.id} className="list-group-item">
                            {user.name} -- {user.email}
                        </li>))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
