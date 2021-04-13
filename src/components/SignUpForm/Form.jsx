
import React from 'react'
import PropTypes from 'prop-types'
import RadioInput from './RadioInput'
import TextInput from './TextInput'

const Form = ({values, handleChange, agreement, handleAggrement, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label="Enter Name"
                name="name"
                type="text"
                id={values.name}
                placeholder="Ariful Islam"
                value={values.name}
                onChange={handleChange}
            />
            <TextInput
                label="Enter Email"
                name="email"
                type="email"
                id={values.email}
                placeholder="example@gmail.com"
                value={values.email}
                onChange={handleChange}
            />
            <TextInput
                label="Enter Password"
                name="password"
                type="password"
                id={values.password}
                placeholder="********"
                value={values.password}
                onChange={handleChange}
            />
             <TextInput
                label="Date of Birth"
                name="birthDay"
                type="date"
                id={values.birthDay}
                placeholder="********"
                value={values.birthDay}
                onChange={handleChange}
            />

            <div>
                <h5>Select Your Gender</h5>
                <div className="form-group">
                    <RadioInput
                        value="Male"
                        handleChange={handleChange}
                    />
                    <RadioInput
                        value="Female"
                        handleChange={handleChange}
                    />
                    <RadioInput
                        value="Other"
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <label >
                    <input type="checkbox" className="mr-2" name="agreement" checked={agreement} onChange={handleAggrement}/>
                     I am Agree Your Term and Conditions
                </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!agreement}>Create User</button>
        </form>
    )
}
Form.propTypes={
    values: PropTypes.object.isRequired,
    agreements: PropTypes.bool.isRequired,
    handleAggrement: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form
