import React from 'react'
import classes from './Button.module.css'

const Button = (props) => <button className={classes.button} {...props}>{props.children}</button>

export default Button
