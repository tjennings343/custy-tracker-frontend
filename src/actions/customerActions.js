export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch({type: 'FETCH_CUSTOMERS'})
        fetch('http://localhost:3000/customers')
        .then(resp => resp.json())
        .then(customers => dispatch({type: 'CUSTOMERS_LOADED', customers}))
    }
}

export const addCustomers = (customer) => {
    return (dispatch) => {
        dispatch({type: 'ADD_CUSTOMER'})
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(customer)
        }
        fetch('http://localhost:3000/customers', configObj)
        .then(resp => resp.json())
        .then(customer => dispatch({type: 'CUSTOMER_ADDED', customer}))
    }


}



