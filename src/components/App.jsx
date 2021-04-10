import React, { Component } from 'react';
import './app.css';
import './Button.module.css'
import BoxA from './BoxA';
import Button from './Button';
import BoxB from './BoxB';

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
                <BoxB/>

                <button>Another</button>
            </div >
        )
    }
}
export default App


