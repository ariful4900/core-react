import React from 'react'
import { Table } from 'reactstrap'
import RowItem from './RowItem'
import PropTypes from 'prop-types'

const TableView = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Todo</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => (
                        <RowItem
                            key={todo.id}
                            todo={todo}
                            toggleSelect={toggleSelect}
                            toggleComplete={toggleComplete}
                        />
                    ))
                }
            </tbody>
        </Table>
    )
}
TableView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}

export default TableView;
