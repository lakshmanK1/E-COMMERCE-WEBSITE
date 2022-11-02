import React from 'react'
import classes from './CartButton.module.css'

function CartButton(props) {
  return (
    
    <div >
        <a href='#' className={classes.cartStyle} onClick={props.onShowCart}>
        <span>cart</span>
        <span className={classes.CartSpan}>0</span>
        </a>
    </div> 
  )
}

export default CartButton