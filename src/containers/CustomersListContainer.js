import React, {Component} from 'react'
import {connect} from 'react-redux'
import CustomerList from '../components/CustomerList'
// import CustomerForm from '../components/CustomerForm'
// import { addCustomers} from '../actions/customerActions'
import {Link} from 'react-router-dom'
import {fetchCustomers} from '../actions/customerActions'


class CustomersContainer extends Component {
    componentDidMount(){
    
        this.props.fetchCustomers()
    }

    render(){

        return(
            <div>
                <CustomerList customers={this.props.customers}/>
                {/* <CustomerForm addCustomers={this.props.customers}/> */}
                <Link to='/customers/new'>Add Customer</Link>
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
// ,{ addCustomers}
