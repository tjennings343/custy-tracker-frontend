export default function customerReducer(state = {customers: []}, action){

    switch (action.type) {
        case 'FETCH_CUSTOMERS':
            return{
                ...state, customers: [...state.customers]
            }

        case 'CUSTOMERS_LOADED':
            return{
                ...state, customers: [...action.customers]
            }

        case 'DELETE_CUSTOMER':
            return{
                ...state, customers: state.customers.filter(customer => action.payload !== customer)
            }

        


            default: return state      

    }

    

}
