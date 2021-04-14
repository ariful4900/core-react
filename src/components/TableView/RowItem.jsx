import React from 'react'
import { Button, CustomInput } from 'reactstrap'
import PropTypes from 'prop-types'

const RowItem = ({todo, toggleSeelct, toggleComplete}) => {
    return (
        <tr>
            <th scope="row">
                <CustomInput
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={()=>toggleSeelct(todo.id)}
                />
            </th>
            <th>
                {todo.time.toDateString()}
            </th>
            <th>{todo.text}</th>
            <th>
                <Button color={todo.isComplete ? 'danger': 'success'} onClick={toggleComplete(todo.id)}>
                    {todo.isComplete? 'Completed': 'Running'}
                </Button>
            </th>
        </tr>
    )
}

RowItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSeelct: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default RowItem
