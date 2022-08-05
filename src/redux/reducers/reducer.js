const init = {
    data:[]
}

export const cartReducer = (state=init, action)=>{
    switch(action.type){
        case 'ADD_CART':
            return {
                ...state,
                data:[...state.data, action.payload]
            }
        default:
            return state;
    }
}