import React, {Component} from 'react'
import {connect} from 'react-redux'
import Customer from '../components/Customer'


class CustomerContainer extends Component{

    
    render(){
        let customer = this.props.customers.find(cust=> cust.id === parseInt(this.props.match.params.id))

        return(
            <div>
                {customer && <Customer customer={customer}/>}
            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        customers: state.customers
        
    }
}

export default connect(mapStateToProps) (CustomerContainer)


