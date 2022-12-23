import React, { useEffect, useReducer ,useState} from 'react'
import { productsArr, MerchantProducts } from './RawData';
import { reducer } from './ReducerFunc';

export const CartContext = React.createContext();

function Context(props) {

  const [cartItems, setCartItems] = useState([]);

  // const enteredEmail = localStorage.getItem('email').replace(/[@.]/g, "");

  const handleAddToCart = (item) => {
   return dispatch({type:"ADD", payload:item});
  }
  
  const handleRemoveFromCart = (id) => {
     return  dispatch({type:"REMOVE",payload:id})
    }

    const  getCartItems = () => {
      const LocalCartData = localStorage.getItem('Items');
      if(LocalCartData === []){
        return [];
      }else{
        const data = JSON.parse(LocalCartData);
        return data;
      }
    }

  const [state, dispatch] = useReducer(reducer,{
    products:productsArr,
    merchants: MerchantProducts,
    Cart: getCartItems(),
    addItem: handleAddToCart,
    removeItem: handleRemoveFromCart,
})

useEffect(()=>{
  localStorage.setItem('Items', JSON.stringify(state.Cart));
},[state.Cart]);
  

  return (
    <CartContext.Provider value={{state, dispatch}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default Context