import React from 'react'
import {Link} from 'react-router-dom'



const CustomerList = ({customers}) => {
    return(
        <React.Fragment>
            <h1>Your Customers</h1>
             <div>
                {customers.map(customer => <li key={customer.id}><Link to={`/customers/${customer.id}`}>{customer.name}</Link></li>)}
            </div>
        </React.Fragment>
        
    )

}

export default CustomerList