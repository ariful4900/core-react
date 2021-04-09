import React, { Component } from 'react';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="bio">
                    <h3>Md Ariful Ismal</h3>
                    <p>FullStack Javascript Developer</p>
                </div>
                <div className="skills">
                    <h3>Skills:</h3>
                    <ul>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">LinkedIn</a></li>
                        <li><a href="/">GitHub</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profile;
