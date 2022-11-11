import React from 'react'
import styled from 'styled-components'
import {AiOutlinePlayCircle} from 'react-icons/ai'

const Container = styled.div`background-color:#73777B; width:100%;
height:480px; margin-top:60px; `;
const Title = styled.h1`font-size:90px; color:white;
text-align:center; justify-content:center; padding:25px;`;
const Button = styled.button`color:white; background-color:#73777B; 
padding:15px; font-weight:150; border:1px solid turquoise; align-items:center; justify-content:center;`;

function HomeBanner() {
  return (
    <Container>
        <Title>The Generics</Title>
        <center><Button>Get Our Latest Album</Button></center>
        <center>
            <AiOutlinePlayCircle style={{color:'turquoise', border:'1px solid turquoise',width:'100px', height:'100px',marginTop:'40px',cursor:'pointer'}}/>
        </center>

    </Container>
  )
}

export default HomeBanner