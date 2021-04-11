import React, { Component } from 'react';
import classes from './app.module.css';
import Input from './Inputs'

class App extends Component {
    
    render() {
        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Working with Forms in React</h1>
                <hr/>
                <Input/>
            </div>
        );
    }
}

export default App;
