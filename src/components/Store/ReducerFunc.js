
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return (
                {
                ...state, Cart:[...state.Cart,{...action.payload, qty:1}]
            }
)
        case "REMOVE" :
            return{
                ...state,
                Cart:state.Cart.filter((p)=> p.id !== action.payload.id)
            }   
           
        case "UPDATE_CART_QUNTY":
                return {...state, Cart:state.Cart.filter(c=>c.id === action.payload.id ?
                    c.qty = action.payload.qty : c.qty)}    
        default:
            return state;
     
    }
    
}