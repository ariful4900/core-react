import React, { Component } from 'react';
import Bio from './Bio';
import Links from './Links';
import './Profile.css'
import Skills from './Skills';





class Profile extends Component {

    me={
        name: 'Ariful Islam Raju',
        title: 'FullStack Javascript Developer',
        skillA: 'Java',
        skillB: 'Javascript',
        skillC: 'Python',
        links: ['Facekbook', 'Twitter', 'LinkedIn', 'GitHub']
    }
    render() {
        return (
            <div className="container">
                <Bio name={this.me.name} title={this.me.title}/>
                <Skills
                 skillA={this.me.skillA}
                 skillB={this.me.skillB}
                 skillC={this.me.skillC}
                 />
                <Links links={this.me.links}/>
            </div>
        );
    }
}

export default Profile;
