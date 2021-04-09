import React, { Component } from 'react';

const MyComponent = () => <h1>My Component</h1>

class App extends Component {

    render() {
    
        const obj = {
            title: 'Test Title',
            id: 'myh1'
        }

        const name = 'Ariful Islam'
        const bio = (
            <div>
            <h3>Abdullah Al Zarif</h3>
            <p>Son of {name} </p>
        </div>
        )
        return (
            <div className="App">
                <h1 {...obj}>What is JSX?</h1>
                <p>JSX is Awesome and it's Mean Javascript Extension</p>
                <p>{new Date().toISOString()}</p>
                <p>My name is {name}</p>
                <MyComponent />
                {bio}
            </div>
        )
    }
}
export default App


