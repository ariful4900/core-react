import React from 'react'
import { Button, CustomInput } from 'reactstrap'
import PropTypes from 'prop-types'

const RowItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <tr>
            <th scope="row">
                <CustomInput
                    type="checkbox"
                    id={todo.id}
                    checked={todo.isSelect}
                    onChange={()=>toggleSelect(todo.id)}
                />
            </th>
            <td>
                {todo.time.toDateString()}
            </td>
            <td>{todo.text}</td>
            <td>
                <Button color={todo.isComplete ? 'danger': 'success'} onClick={()=>toggleComplete(todo.id)}>
                    {todo.isComplete? 'Completed': 'Running'}
                </Button>
            </td>
        </tr>
    )
}

RowItem.propTypes={
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default RowItem
