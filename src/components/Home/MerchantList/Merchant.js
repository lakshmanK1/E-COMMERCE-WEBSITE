import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../Store/Context';
import MerchantItems from './MerchantItems';

const Container = styled.div`padding:20px; display:flex;
flex-wrap:wrap; justify-content:space-between;`;

function Merchant() {

    const {state:{merchants}} = useContext(CartContext)

  return (
    <Container>
        {merchants.map((item)=>(
            <MerchantItems data={item}/>
        ))}
        
    </Container>
  )
}

export default Merchant