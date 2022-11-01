import React from 'react'
import CartButton from './Cart/CartButton';
import classes from '../Components/Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
        <div className={classes.headerLinks}>
            <a href='#'>Home</a>
            <a href='#'>Store</a>
            <a href='#'>About</a>
            <CartButton/>
        </div>
        
    </div>
  );
}

export default Header