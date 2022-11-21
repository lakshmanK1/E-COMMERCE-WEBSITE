import React, { useContext } from 'react'
import ProductItems from './ProductItems'
import { CartContext } from '../../Store/Context'
import styled from 'styled-components'


const Container = styled.div`padding:20px; display:flex;
flex-wrap:wrap; justify-content:space-between;`;
function Products() {
    const {state:{products}} = useContext(CartContext);
  return (
    <Container>
        {products.map((prods)=>(
            <ProductItems data={prods}/>
        ))} 
    </Container>
  )
}

export default Products