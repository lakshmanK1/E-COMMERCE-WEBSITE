import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';
import Banner from './Banner';
import Products from './ProductsList/Products';
import HeadingBanner from './HeadingBanner';
import Footer from './Footer';
import Cart from '../Cart/Cart'; 

const Container = styled.div``;

function Home() {
    const [cartHandle, setCartHandle] = useState(false);

    const showCart = () => {
        setCartHandle(true);
    }

    const hideCart = () => {
        setCartHandle(false);
    }

  return (
    <Container>
        <NavBar onShowCart={showCart}/> 
        <Banner/>
        <HeadingBanner text="MUSIC"/>
        <Products/> 
        {cartHandle && <Cart onHideCart={hideCart}/> } 
        <Footer/>    
    </Container>
  )
}

export default Home