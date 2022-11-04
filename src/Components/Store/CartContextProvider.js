import CartContext from "./CartContext";
import React,{useReducer} from "react";
import { reducer } from "./Reducer";
import { CartProducts } from "../Cart/Products";

const defaultState = {
    items:[...CartProducts],
    totalAmount:0

}

const CartContextProvider = (props) => {

    const [cartState, dispatch] = useReducer(reducer, defaultState)


    const addItemToCartHandler = (item) => {

    };
    
    const removeItemFromCarthandler = (id) => {
        return dispatch({
            type:"REMOVE",
            id:id
        })
    
    }
    
    const cartcontextData = {
        items:cartState.items,
        totalAmount:0,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromCarthandler
    }

    return <CartContext.Provider value={cartcontextData}>
        {props.children}
    </CartContext.Provider>
}

export default CartContextProvider