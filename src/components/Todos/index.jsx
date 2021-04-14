import React, { Component } from 'react';
import ListView from '../ListView';
import TableView from '../TableView';

class Todos extends Component {

    state = {
        todos: [
            {
                id: 'dsfasoer',
                text: 'main todo task',
                description: 'simple discription',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'diarteso',
                text: 'Sub todo task',
                description: 'simple discription',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ]
    }
    toggleSelect = todoId => {

    }

    toggleComplete = todoId => {

    }
    render() {
        return (
            <div>
                <h1 className="display-4 text-center mb-5">Stack Todos</h1>
                <div>
                    <ListView
                     todos={this.state.todos}
                     toggleSelect={this.toggleSelect}
                     toggleComplete={this.toggleComplete}
                     />
                     <TableView
                     todos={this.state.todos}
                     toggleSelect={this.toggleSelect}
                     toggleComplete={this.toggleComplete}
                     />
                </div>
            </div>
        );
    }
}

export default Todos;

const todo = {

}
