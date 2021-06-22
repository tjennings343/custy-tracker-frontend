import React, {Component} from 'react'
import {connect} from 'react-redux'
import Customer from '../components/Customer'
import {fetchCustomers} from '../actions/customerActions'


class CustomerContainer extends Component{

    componentDidMount(){        
        this.props.fetchCustomers()
    }
    

    render(){
        const customer = this.props.customers.filter(cust => cust.id === parseInt(this.props.match.params.id))

        return(
            <div>
                <Customer customer={customer}/>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        customers: state.customers
        
    }
}

export default connect(mapStateToProps,{fetchCustomers}) (CustomerContainer)