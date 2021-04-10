import React, { Component } from 'react';
import classes from './app.module.css'

class App extends Component {

    handleBtnClick = (event) => {
        console.log(event.target);
        // console.log('I am cute little button');
    }
    render() {
        return (
            <div className={classes.Wrapper}>
                <h1 className={classes.Heading}>Event is React</h1>
                <button className={classes.Btn} onClick={this.handleBtnClick}>Click Me</button>
            </div>
        );
    }
}

export default App;
