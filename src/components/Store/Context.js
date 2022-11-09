import React, { useReducer } from 'react'
import { productsArr } from './RawData';
import { reducer } from './ReducerFunc';

export const CartContext = React.createContext();

function Context(props) {
    const [state, dispatch] = useReducer(reducer,{
        products:productsArr,
        cart:[]
    })
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default Context