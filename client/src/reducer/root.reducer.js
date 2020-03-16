export default (state, action) => {
    switch(action.type){

        case 'DELETE_TRANSACTION':
            return {
              ...state,
              transactions: state.transactions.filter(
                ({ _id }) => action.payload !== _id
              )
            };

        case 'ADD_TRANSACTION':
            return {
                ...state,
              transactions: [...state.transactions, action.payload]
            }
        
        case 'GET_TRANSACTIONS':
            return {
              ...state,
              transactions: action.payload,
              loading: false
            }
        case 'FETCH_ERROR':
            return {
              ...state,
              error: action.payload,
              loading: false
            }
        default:
            return state;
    }
}