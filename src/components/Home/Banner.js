import React from 'react'
import styled from 'styled-components'

const Container = styled.div`background-color:#73777B; width:100%;
height:250px; margin-top:60px;`;
const Title = styled.h1`font-size:80px; color:white;
text-align:center; justify-content:center; padding:25px;`;

function Banner() {
  return (
    <Container>
        <Title>The Generics</Title>
    </Container>
  )
}

export default Banner