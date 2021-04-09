import React, { Component } from 'react';

class App extends Component{

    render(){
        return React.createElement('div', {className: 'App'}, [
            React.createElement('h1', null, 'What is JSX?'),
            React.createElement('p', null, 'JSX is Awesome and it\'s Mean Javascript Extension')
        ])

        // return <div>
        //     <h1>What is JSX?</h1>
        // </div>
    }
}
export default App


const element = {
    type: 'div',
    props: {
        className: 'test',
        title: 'Test Me'
    },
    children: ['p', 'h1', 'img']
}