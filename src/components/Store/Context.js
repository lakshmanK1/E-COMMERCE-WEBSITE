import React, { useEffect, useReducer ,useState} from 'react'
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

    const  getCartItems = () => {
      let LocalCartData = localStorage.getItem('products');
      if(LocalCartData === []){
        return [];
      }else{
        return JSON.parse(LocalCartData);
      }
    }

    const [state, dispatch] = useReducer(reducer,{
        products:productsArr,
        merchants: MerchantProducts,
        // cart:[],
        cart:getCartItems(),
        addItem: handleAddToCart,
        removeItem: handleRemoveFromCart
    })

    useEffect(()=>{
      localStorage.setItem('products', JSON.stringify(state.cart));
    },[state.cart]);



  return (
    <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default Context