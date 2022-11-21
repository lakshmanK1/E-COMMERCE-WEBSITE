import React, { useState } from 'react'
import styled from 'styled-components'
import Banner from './Banner';
import Products from './ProductsList/Products';
import HeadingBanner from './HeadingBanner';
import Footer from './Footer';
import Cart from '../Cart/Cart'; 
import ProductsPageNavBar from '../HeaderNavs/ProductsPageNavBar';
import Merchant from './MerchantList/Merchant';

const Container = styled.div``;
const ViewCart = styled.button`padding: 15px;
border: 2px solid teal; background-color: white;
cursor: pointer; font-weight: 500; margin-left:700px;
&:hover {
  background-color: #f8f4f4;
}
;`;

function ProductsStore() {
    const [cartHandle, setCartHandle] = useState(false);

    const showCart = () => {
        setCartHandle(true);
    }

    const hideCart = () => {
        setCartHandle(false);
    }

  return (
    <Container>
        <ProductsPageNavBar onShowCart={showCart}/>
        <Banner/>
        <HeadingBanner text="MUSIC"/>
        <Products/>
        <ViewCart onClick={showCart}>View Cart</ViewCart>
        <HeadingBanner text="Merchants"/>
        <Merchant/>
        {cartHandle &&  <Cart onHideCart={hideCart}/>} 
        <Footer/>    
    </Container>
  )
}

export default ProductsStore