import React from 'react'

const MyProps = (props) => {
    console.log('MyProps-', props.name);
    return (
        <div>
            <h1>My Name is {props.name}</h1>
        </div>
    )
}

export default MyProps
