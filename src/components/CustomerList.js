import React from 'react'



const CustomerList = ({customers}) => {
    return(
        <React.Fragment>
            <h1>Your Customers</h1>
             <div>
                {customers.map(customer => <li key={customer.id}>{customer.name}</li>)}
            </div>
        </React.Fragment>
        
    )

}

export default CustomerList