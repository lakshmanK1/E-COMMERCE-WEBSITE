import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';
import Banner from './Banner';
import Products from './ProductsList/Products';
import HeadingBanner from './HeadingBanner';
import Footer from './Footer';

const Container = styled.div``;

function Home() {
  return (
    <Container>
        <NavBar/> 
        <Banner/>
        <HeadingBanner text="MUSIC"/>
        <Products/>  
        <Footer/>    
    </Container>
  )
}

export default Home