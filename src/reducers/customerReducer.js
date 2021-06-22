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


            default: return state      

    }

    

}
