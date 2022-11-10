import React, { useState } from 'react'
import styled from 'styled-components'
import Banner from './Banner';
import Products from './ProductsList/Products';
import HeadingBanner from './HeadingBanner';
import Footer from './Footer';
import Cart from '../Cart/Cart'; 
import ProductsPageNavBar from '../HeaderNavs/ProductsPageNavBar';

const Container = styled.div``;

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
        {cartHandle &&  <Cart onHideCart={hideCart}/>} 
        <Footer/>    
    </Container>
  )
}

export default ProductsStore