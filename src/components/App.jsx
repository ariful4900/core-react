import React, { Component } from 'react';
import classes from './app.module.css';
import UncontrolledForm from './Form/UncontrolledForm';
// import Input from './Inputs'

class App extends Component {
    
    render() {
        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Working with Forms in React</h1>
                <hr/>
                {/* <Input/> */}
                <UncontrolledForm/>
            </div>
        );
    }
}

export default App;
