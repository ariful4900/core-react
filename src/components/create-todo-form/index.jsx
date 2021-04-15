import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class CreateTodoForm extends Component {

    state = {
        text: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.createTodo(this.state)
        e.target.reset()
        this.setState({text:'', description: ''})

    }
    render() {
        return (
           <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                   <Label>Enter Task</Label>
                   <Input 
                        placeholder="Do some Code"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                   />
               </FormGroup>
               <FormGroup>
                   <Label>Describe Task</Label>
                   <Input 
                        type="textarea"
                        placeholder="Write some short description about your task"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                   />
               </FormGroup>
               <Button type="submit">Create Todo</Button>
           </Form>
        );
    }
}
CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default CreateTodoForm;
