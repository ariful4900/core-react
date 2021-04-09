import React, { Component } from 'react';


class App extends Component {

    constructor(props) {
        super(props)
        this.count = 5;
    }

    render() {
        console.log(this.count);
        return (
            <div className="App" >
                <h1>Why do we need state</h1>
                <h1>Count = {this.count}</h1>
            </div>
        )
    }
}
export default App


