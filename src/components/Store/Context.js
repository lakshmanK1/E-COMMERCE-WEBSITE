import React, { useReducer } from 'react'
import { productsArr, MerchantProducts } from './RawData';
import { reducer } from './ReducerFunc';

export const CartContext = React.createContext();

function Context(props) {

  const handleAddToCart = (item) => {
    return dispatch({
        type:"ADD",
        payload:item
    });
  }
  const handleRemoveFromCart = (id) => {
        return dispatch({
            type:"REMOVE",
            payload:id
        });
    }


    const [state, dispatch] = useReducer(reducer,{
        products:productsArr,
        merchants: MerchantProducts,
        cart:[],
        addItem: handleAddToCart,
        removeItem: handleRemoveFromCart
    })

  return (
    <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default Context