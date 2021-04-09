import React, { Component } from 'react';


class App extends Component {

    count = 0

    render() {
        console.log(this.count);
        return (
            <div className="App" >
                <h1>Why do we need state</h1>
                <h1>Count = {this.count}</h1>
                <button onClick={() => {this.count++; console.log('clicked', this.count);}}>Increament</button>
            </div>
        )
    }
}
export default App


