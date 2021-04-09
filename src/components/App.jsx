import React, { Component } from 'react';
import Profile from './Profile';
import Skills from './Profile/Skills';


class App extends Component {

    render() {
    
       
        return (
            <div className="App" >
                <Profile/>
                <div style={{margin: '30px 0'}}>
                    <h3 style={{marginTop: '30px'}}>List of Programmes</h3>
                    <p>Mr.X</p>
                    <Skills/>

                    <p>Mr. Y</p>
                    <Skills/>
                </div>
            </div>
        )
    }
}
export default App


