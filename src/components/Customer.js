import React from 'react'




const Customer = ({customer, deleteCustomer}) => {
    
    let phone = customer.phones.map(phone => phone.phone_type)
    let phone_purchased = customer.phones.map(date => date.purchase_date)
    
    
    return (
            <div>
                <h1>{customer.name}</h1>
                <li>Email: {customer.email}</li>
                <li>Phone Number: {customer.phone_number}</li>
                <li>{phone} : {phone_purchased}</li>
                <button onClick={() => deleteCustomer(customer.id)}>Delete Customer</button>
                

            </div>        
    )
}

export default Customer