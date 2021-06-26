import React, {Component} from 'react'
import {connect} from 'react-redux'
import Customer from '../components/Customer'
import {fetchCustomers, deleteCustomer} from '../actions/customerActions'




class CustomerContainer extends Component{

    componentDidMount(){
    
        this.props.fetchCustomers()
    }
    
    render(){
        let customer = this.props.customers.find(cust=> cust.id === parseInt(this.props.match.params.id))

        return(
            <div>
                {customer && <Customer customer={customer}  deleteCustomer={this.props.deleteCustomer} addPhone={this.props.addPhone}/>}
                

            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        customers: state.customers
        
    }
}

export default connect(mapStateToProps, {fetchCustomers, deleteCustomer}) (CustomerContainer)


