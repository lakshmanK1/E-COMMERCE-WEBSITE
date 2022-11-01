import React from 'react'
import classes from './CartButton.module.css'

function CartButton() {
  return (
    
    <div >
        <a href='#' className={classes.cartStyle}>
        <span>cart</span>
        <span className={classes.CartSpan}>0</span>
        </a>
    </div> 
  )
}

export default CartButton