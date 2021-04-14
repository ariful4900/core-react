import React from 'react'
import { Button, CustomInput, ListGroupItem } from 'reactstrap'
import PropTypes from 'prop-types'


//List Item Component

const ListItem = ({ todo, toggleSelect, toggleComplete }) => {
    return (
        <ListGroupItem className="d-flex align-items-center">
            <CustomInput
                type="checkbox"
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString}</p>
            </div>
            <Button className="ml-auto" color={todo.isComplete ? 'danger': 'success'} onClick={()=> toggleComplete(todo.id)}>
                    {todo.isComplete ? 'Completed': 'Rurning'}
            </Button>

        </ListGroupItem>
    )
}
ListItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default ListItem