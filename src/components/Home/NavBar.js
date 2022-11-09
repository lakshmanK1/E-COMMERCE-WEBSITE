import React, { useContext } from 'react'
import styled from 'styled-components';
import { CartContext } from '../Store/Context';

const Container = styled.div`display: flex; padding: 25px;font-family: sans-serif;
font-size: 15px; font-weight: 200; justify-content: center;
position: fixed; background-color:black;
top: 0%; width: 100%; z-index: 1;
`;

const HeaderLinks = styled.div``;

const AnchorLink = styled.a`color: white;
text-decoration: none; cursor: pointer; margin-right: 2rem;`;

const CartContainer = styled.div``;

const CartButton = styled.a` border: 2px solid #56CCF2; border-radius: 7px;
padding: 2px 10px; position: absolute; right: 2%; color:white;
background-color: black;text-decoration: none; margin-right:15px;
margin-top:-15px;`;

const Span = styled.span``;
const CartCount = styled.span`position: absolute;
color: #56CCF2;
font-size: 20px;
top: -5px;
right:-15px;`;


function NavBar(props) {
    const {state:{cart}} = useContext(CartContext)
  return (
    <Container>
            <HeaderLinks>
                <AnchorLink href='#'>HOME</AnchorLink>
                <AnchorLink href='#'>STORE</AnchorLink>
                <AnchorLink href='#'>ABOUT</AnchorLink>
            </HeaderLinks>
            <CartContainer>
                <CartButton href='#' onClick={props.onShowCart}>
                    <Span>Cart</Span>
                    <CartCount>{cart.length}</CartCount>
                </CartButton>
            </CartContainer>
    </Container>
  )
}

export default NavBar