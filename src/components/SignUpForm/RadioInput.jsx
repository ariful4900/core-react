import React from 'react'

const RadioInput = (props) => {
    return (
        <label  className="mr-4">
            <input className="mr-2"
                type="radio"
                name="gender"
                value={props.value}
                onChange={props.handleChange}
            />
            {props.value}
        </label>
    )
}

export default RadioInput
