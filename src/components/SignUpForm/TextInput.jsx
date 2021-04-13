import React from 'react'
import PropTypes from 'prop-types'

const TextInput = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input 
            type={props.type}
            className="form-control"
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            />
        </div>
    )
}
TextInput.propTypes={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}

export default TextInput
