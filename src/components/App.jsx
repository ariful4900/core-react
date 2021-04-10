import React, { Component } from 'react';

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
            </div >
        )
    }
}
export default App


