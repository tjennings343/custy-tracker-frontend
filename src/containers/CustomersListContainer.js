import React, {Component} from 'react'
import {connect} from 'react-redux'
import CustomerForm from '../components/CustomerForm'
import CustomerList from '../components/CustomerList'
import {fetchCustomers} from '../actions/customerActions'


class CustomersContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomers()
    }

    render(){
        return(
            <div>
                <CustomerForm/>
                <CustomerList customers={this.props.customers}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        customers: state.customers
    }
}

export default connect(mapStateToProps,{fetchCustomers}) (CustomersContainer)