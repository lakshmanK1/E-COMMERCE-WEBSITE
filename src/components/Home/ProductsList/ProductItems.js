import axios from 'axios';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AuthContext } from '../../Store/AuthContext';
import { CartContext } from '../../Store/Context';

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
    const {state:{cart,addItem,removeItem}} = useContext(CartContext);
    const {AuthContextValues} = useContext(AuthContext);
    

    // const handleAddToCart = () => {
    //     return dispatch({
    //         type:"ADD",
    //         payload:props.data
    //     });
    // }

    // const handleRemoveFromCart = () => {
    //     return dispatch({
    //         type:"REMOVE",
    //         payload:props.data
    //     });
    // }

    const addItemHandler = (items) => {
      addItem(items);

      // axios.post(`https://crudcrud.com/api/700e54e3c38740e797b83ec4c7c6c6e8/user`,items).then((res)=>{
      //   console.log(res);
      // }).catch((err)=>{
      //   console.log(err);
      // })
    }

    const removeItemHandler = (id) => {
      removeItem(id);
    }

    console.log(cart);
  return (
    
    <Container>
        <UL key={props.data.id}>
            <LI><Title>{props.data.title}</Title></LI>
            <LI><Link to={`/dynamicStore.html/singleproduct/${props.data.id}`}><Image src={props.data.imageUrl}/></Link></LI>
            <LI><Price>RS: {props.data.price}</Price></LI>

            {
                cart.some((p)=>p.id === props.data.id) ? (<AddBtn style={{backgroundColor:'red'}} onClick={()=>removeItemHandler(props.data)}>REMOVE FROM CART</AddBtn>) 
                : (<AddBtn onClick={()=>addItemHandler(props.data)}>ADD TO CART</AddBtn>)
            }

        </UL>
    </Container>
  )
}

export default ProductItems