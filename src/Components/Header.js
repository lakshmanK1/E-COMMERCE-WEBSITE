import React from 'react'
import CartButton from './Cart/CartButton';
import classes from '../Components/Header.module.css'

function Header(props) {
  return (
    <div className={classes.header}>
        <div className={classes.headerLinks}>
            <a href='#'>Home</a>
            <a href='#'>Store</a>
            <a href='#'>About</a>
            <CartButton onShowCart={props.onShowCart}/>
        </div>
        
    </div>
  );
}

export default Header