import React from 'react'
import styled from 'styled-components';
import { CartContext } from '../Store/Context';
import { useContext } from 'react';

const CartContainer = styled.div``;

const CartBtn = styled.button` border: 2px solid #56CCF2; border-radius: 7px;
padding: 2px 10px; position: absolute; right: 2%; color:white;
background-color: black;text-decoration: none; margin-right:15px;
margin-top:-15px;`;

const Span = styled.span``;
const CartCount = styled.span`position: absolute;
color: #56CCF2;
font-size: 20px;
top: -5px;
right:-15px;`;

function CartButton(props) {
    const {state:{Cart}} = useContext(CartContext)
  return (
    <CartContainer>
             <CartBtn onClick={props.enableCart}>
                    <Span>Cart</Span>
             <CartCount>{Cart.length}</CartCount>
              </CartBtn> 
     </CartContainer>
  );
}

export default CartButton