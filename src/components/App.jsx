import React, { Component } from 'react';
import Profile from './Profile';
import Bio from './Profile/Bio';
import MyProps from './Props';
import Skills from './Profile/Skills';


class App extends Component {

    render() {
    
       
        return (
            <div className="App" >
                <Profile/>
                <Bio name="test user" title="Test title"/>
                <div style={{margin: '30px 0'}}>
                    <h3 style={{marginTop: '30px'}}>List of Programmes</h3>
                    <p>Mr.X</p>
                    <Skills skillA="React" skillB="Angular" skillC="Vue"/>

                    <p>Mr. Y</p>
                    <Skills skillA="Node" skillB="Mongodb" skillC="Express"/>
                    <MyProps name="Abdullah Al Zarif"/>
                    <MyProps name="Aysha Mone"/>
                    <MyProps name="Ariful Islam"/>
                </div>
            </div>
        )
    }
}
export default App


