import { Component } from 'react';
import shortid from 'shortid';
import PollCreationForm from './Form';

const defaultOptions = [
    { id: shortid.generate(), value: '', vote: 0 },
    { id: shortid.generate(), value: '', vote: 0 },
]

class PollForm extends Component {

    state = {
        title: '',
        description: '',
        options: defaultOptions,
        errors: {}
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOptionChange = (event, index) => {
        const { options } = this.state;
        options[index].value = event.target.value;
        this.setState({ options });
    }

    createOption = () => {
        const { options } = this.state
        if (options.length < 5) {
            options.push({
                id: shortid.generate(),
                value: '',
                vote: 0
            });
            this.setState({ options });
        } else {
            alert('You can create max 5 options')
        }
    }

    deleteOption = index => {
        const { options } = this.state
        if (options.length > 2) {
            options.splice(index, 1)
            this.setState({ options })
        } else {
            alert('You Must have at last two options')
        }
    }

    handleSubmite = e => {
        e.preventDefault()
        const { isValid, errors } = this.validate();

        if (isValid) {
            const { title, description, options } = this.state
            this.props.submit({
                title,
                description,
                options
            })
            e.target.reset()
            this.setState({
                title: '',
                description: '',
                options: defaultOptions,
                errors: {}
            })
        } else {
            this.setState({ errors })
        }
    }

    validate = () => {
        const errors = {}
        const { title, description, options } = this.state

        if (!title) {
            errors.title = 'Please Provide A Title'
        } else if (title.length < 20) {
            errors.title = 'Title Too Short'
        } else if (title.length > 100) {
            errors.title = 'Title Too Long'
        }

        if (!description) {
            errors.description = 'Please Provide A Description'
        } else if (description.length > 500) {
            errors.description = 'Description Too Long'
        }

        const optionErrors = []
        options.forEach((opt, index) => {
            if (!opt.value) {
                optionErrors[index] = 'Option Text Emplty'
                // optionErrors.push('Option Text Emplty')
            } else if (opt.value.length > 100) {
                optionErrors[index] = 'Option Text Too Long'
                // optionErrors.push('Option Text Too Long')
            }
        })

        if (optionErrors.length > 0) {
            errors.options = optionErrors
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    render(){
        const {title, description, options, errors}= this.state
        return(
            <PollCreationForm 
                title={title}
                description={description}
                options={options}
                buttonValue={this.props.buttonValue || 'Create Poll'}
                errors={errors}
                handleChange={this.handleChange}
                handleOptionChange={this.handleOptionChange}
                createOption={this.createOption}
                deleteOption={this.deleteOption}
                handleSubmit={this.handleSubmite}
            />
        )
    }

}

export default PollForm;
