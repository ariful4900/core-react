import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Stack Todos</h1>
            </div>
        );
    }
}

export default Todos;

const todo = {
    id: 'dsfasoer',
    text: 'main todo task',
    description: 'simple discription',
    time:'12:60 AM',
    isComplete: false,
    isSelect: false
}
