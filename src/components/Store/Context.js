import React, { useReducer } from 'react'
import { productsArr, MerchantProducts } from './RawData';
import { reducer } from './ReducerFunc';

export const CartContext = React.createContext();

function Context(props) {
    const [state, dispatch] = useReducer(reducer,{
        products:productsArr,
        merchants: MerchantProducts,
        cart:[]
    })
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default Context