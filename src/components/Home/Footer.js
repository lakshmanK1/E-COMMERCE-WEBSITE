import React from 'react'
import styled from 'styled-components'
import {BsFacebook,BsInstagram,BsWhatsapp,BsTwitter} from 'react-icons/bs'

const Container = styled.div`display:flex;
margin-top: 40px;padding:20px;background: #56ccf2;`;
const Left = styled.div`flex:1;`;
const Right = styled.div`flex:1; padding:10px; margin-left:140px;`;

const Brand = styled.h1`color:white; width:350px; font-size:40px; font-weight: bold;
margin:0 auto; font-family: 'Montserrat';`;
const SocialContainer = styled.div`display:flex;`;
const SocialIcon = styled.div`width:50px; height:40px;
color:white; border-radius:50%; display:flex; align-items:center;
justify-content:center; cursor:pointer;`;

function Footer() {
  return (
    <Container>
        <Left>
            <Brand>THE GENERICS</Brand>
        </Left>

        <Right>
            <SocialContainer>
                <SocialIcon><BsFacebook/></SocialIcon>
                <SocialIcon><BsInstagram/></SocialIcon>
                <SocialIcon><BsWhatsapp/></SocialIcon>
                <SocialIcon><BsTwitter/></SocialIcon>
            </SocialContainer>
        </Right>
        
    </Container>
  )
}

export default Footer