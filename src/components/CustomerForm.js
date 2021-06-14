import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCustomers} from '../actions/customerActions'

class CustomerForm extends Component {

    state = {
        name: '',
        phone_number: '',
        email: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addCustomers(this.state)
        this.setState({
            name: '',
            phone_number: '',
            email: ''
        })
        
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleOnChange}/><br/>
                    <label>Phone Number:</label>
                    <input type='integer' name='phone_number' value={this.state.phone_number} onChange={this.handleOnChange}/><br/>
                    <label>Email</label>
                    <input type='text' name='email' value={this.state.email} onChange={this.handleOnChange}/><br/>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCustomers}) (CustomerForm)