import React, { Component } from 'react';
import './app.css';
import './Button.css'
import BoxA from './BoxA';
import Button from './Button';

const myHeader = {
    color: 'blue',
    fontWeight: 300,
    fontFamily: 'Arial',
    fontSize: '36px'
}
class App extends Component {




    render() {
        return (
            <div className="App" >
                <h1 style={myHeader} >How to Style React App</h1>
                <h1 style={{
                    color: 'orange',
                    fontWeight: 300,
                    fontFamily: 'Arial',
                    fontSize: '36px'
                }}>Another Header Tag</h1>
                    <Button >Click Button</Button>
                <BoxA/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quos?</p>
                <button className="button" >Click Me</button>

                <button>Another</button>
            </div >
        )
    }
}
export default App


