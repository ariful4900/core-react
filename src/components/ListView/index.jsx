import React from 'react'
import { ListGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import ListItem from './Listitem'

const ListView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <ListGroup>
            {
                todos.map(todo => (
                    <ListItem key={todo.id} todo={todo} 
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete}
                    />
                ))
            }
        </ListGroup>
    )
}
ListView.propTypes={
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListView

