import React, {Component} from 'react'
import {connect} from 'react-redux'
import Customer from '../components/Customer'
import {fetchCustomer} from '../actions/customerActions'


class CustomerComponent extends Component{
    
    componentDidMount(){
        this.props.fetchCustomer(this.props.match.params.id)
    }

    render(){
         
        return(
            
            <div>
                <Customer customers={this.props.customers}/>
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        customers: state.customers.customers
    }
}

export default connect(mapStateToProps,{fetchCustomer}) (CustomerComponent)