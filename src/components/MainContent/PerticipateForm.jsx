import React, { Component } from 'react';
import { Button, CustomInput, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap';

class PerticipateForm extends Component {

    state = {
        name: '',
        slectedOption: '',
        errors: {}
    }

    handleChange = e => {
        this.setState({
            [e.targer.name]: e.targer.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { errors, isValid } = this.validate();

        if (isValid) {
            this.props.getOpinion({
                pollId: this.props.poll.id,
                name: this.state.name,
                slectedOption: this.state.slectedOption
            })

            e.targer.reset()
            this.setState({
                name: '',
                slectedOption: '',
                errors: {}
            })
        } else {
            this.setState({ errors })
        }
    }

    validate = () => {
        const errors = {}

        if (!this.state.name) {
            errors.name = 'Place Provide A Name'
        } else if (this.state.name.length > 20) {
            errors.name = 'Name Too Long'
        }

        if (!this.state.slectedOption) {
            errors.slectedOption = 'Plese Select One Option'
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="d-flex">
                    <h4>Options</h4>
                    <Button
                        color="warning"
                        type="button"
                        className="ml-auto"
                        onClick={this.props.toggleModal}
                    >Edit</Button>
                    <Button
                        type="button"
                        className="ml-2"
                        onClick={() => this.props.deletePoll(this.props.poll.id)}
                    >Delete</Button>
                </div>
                {
                    this.props.poll.options.map(opt => (
                        <FormGroup className="my-2" key={opt.id}>
                            <Label className="d-flex">
                                <CustomInput
                                    type="radio"
                                    id={opt.id}
                                    name="selectedOption"
                                    value={opt.id}
                                    onChange={this.handleChange}
                                    invalid={this.state.errors.slectedOption ? true : false}
                                />
                                {opt.value}
                                <span
                                    style={{
                                        padding: '5px 20px',
                                        background: 'green',
                                        color: 'white',
                                        borderRadius: '5px'
                                    }}
                                    className="ml-auto"
                                >
                                    {opt.vote}
                                </span>
                                <span
                                    style={{
                                        padding: '5px 20px',
                                        background: 'orange',
                                        color: 'white',
                                        borderRadius: '5px'
                                    }}
                                    className="ml-2"
                                >
                                    {this.props.poll.totalVote > 0
                                        ? ((100 * opt.vote) / this.props.poll.totalVote).toFixed(2)
                                        : 0} %
                                </span>
                            </Label>
                        </FormGroup>
                    ))
                }
                <FormGroup className="my-3">
                    <Label>
                        Enter Your Name
                    </Label>
                    <Input
                        name="name"
                        placeholder="Ariful Islam"
                        value={this.state.value}
                        onChange={this.handleChange}
                        invalid={this.state.errors.name ? true : false}
                    />
                    {
                        this.state.errors.name && <FormFeedback>{this.state.errors.name}</FormFeedback>
                    }
                </FormGroup>
                <Button type="submit">Submit Your Opinion</Button>
            </Form>
        );
    }
}

export default PerticipateForm;