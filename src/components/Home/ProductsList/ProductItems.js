import React from 'react'
import styled from 'styled-components'

const Container = styled.div`flex:1; max-width: 900px; margin:0 auto;
padding: 20px 30px;align-content: center; display:flex; flex-wrap: wrap;
justify-content:space-around;`;
const UL = styled.ul`align-content: center; display: inline-block;
margin: 30px; `;
const LI = styled.li`list-style:none;`;

const Title = styled.h3`font-weight:100;`;

const Image = styled.img`height: 250px;width:250px;overflow: hidden;
transform-origin: center center;object-fit: cover;transition: ease-in 0.5s;
filter: brightness(100%);`;

const Price = styled.span`display: flex;margin:8px;align-items: center;
justify-content: space-between;`;

const AddBtn = styled.button`cursor:pointer;padding:8px;color:white;
border:none;font-size:15px;font-weight: bold;border-radius: 4%;
background: #56CCF2;`;

function ProductItems(props) {
  return (
    
    <Container>
        <UL key={props.data.id}>
            <LI><Title>{props.data.title}</Title></LI>
            <LI><Image src={props.data.imageUrl}/></LI>
            <LI><Price>RS: {props.data.price}</Price></LI>
            <AddBtn>ADD TO CART</AddBtn>
        </UL>
    </Container>
  )
}

export default ProductItems