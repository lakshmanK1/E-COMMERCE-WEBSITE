import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import {TiDelete} from 'react-icons/ti'
import { CartContext } from '../Store/Context';
import Swal from 'sweetalert2';

const Container = styled.div`margin: 0px;width:60%;position: fixed;
top: 50px;height: 95%;right: 0;background-color: rgb(255, 255, 255);
border: 1px solid rgb(177, 103, 103);min-height: 50vh;text-align: center;
align-content: center;justify-content: center;overflow-y: scroll;
}`;
const CartDetails = styled.div`width: 60%;
margin: auto;`;
const Image = styled.img`width: 80px;
height: 80px; margin-right: 15px; border-radius: 5px;`;
const Title = styled.h3`margin-right: 0px;
display: block; font-family: Metal Mania;`;
const Price = styled.span`margin-right: 5px;
left: 10px;`;
const Quantity = styled.input`width: 40px;
height: 30px;
border: 1px solid rgb(0, 204, 255);
border-radius: 8%;
outline: none;
text-align: center;
margin-right: 20px;`;
const RemoveBtn = styled.button`color: white;
font-weight: bold;
background: rgb(231, 76, 76);
cursor: pointer;
border: none;
border-radius: 8%;
height: 30px;
outline: none;
padding: 0px 7px;`;
const Heading = styled.h1`font-family: 'Metal Mania';
font-weight: 700;`;
const SubHeads = styled.div``;
const Span = styled.span`margin-left: 8%;
font-family: 'Metal Mania';
font-size: 25px;
font-weight: 700;`;

const UL = styled.ul`display: grid;
grid-template-columns: auto auto auto auto; grid-gap: 50px;
padding: 5px;`;
const LI = styled.li`list-style:none;  `;

const TotalQnt = styled.span``;
const TotalPrice = styled.span``;

const PurchaseBtn = styled.button`width: 150px;
height: 45px;
color: white;
font-weight: bold;
background: rgb(231, 76, 76);
cursor: pointer;
border: none;
border-radius: 8%;
outline: none;
margin-top:30px; align-items:center; justify-content:center; `;

function Cart(props) {
    const {state:{Cart,removeItem},dispatch} = useContext(CartContext)

    const [totalPrice, setTotalPrice] = useState();

    useEffect(()=>{
        setTotalPrice(Cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty,0))
    },[Cart])

    const removeItemHandler = (id) => {
        removeItem(id);
      }

    const  onClickhandler = () => {
        if(true){
          Swal.fire("Thank you!", " Your order Has been Placed", "success");
          setTimeout(()=>{
            window.location.reload();
          },2000);
        }
  
      };


  return (
    <Container>

       
        <TiDelete style={{marginLeft: '72%',height: '80px',
        marginTop : '2%', width:'40px', cursor:'pointer'
        }} onClick={props.onHideCart}/>
        

        <Heading>CART</Heading>
        <SubHeads>
            <Span>ITEM</Span>
            <Span>PRICE</Span>
            <Span>Quantity</Span>
        </SubHeads>
        <CartDetails>
            {Cart.map((items)=>(
                <UL key={items.id}>
                    <LI><Image src={items.imageUrl}/></LI>
                    <LI><Title>{items.title}</Title></LI>
                    <LI><Price>{items.price}</Price></LI>
                    <LI><Quantity type='number' value={items.qty} onChange={(e)=>
                    dispatch({
                        type:"UPDATE_CART_QUNTY",
                        payload:{
                            id:items.id,
                            qty:e.target.value
                        }
                    })
                }/></LI>
                    <RemoveBtn onClick={()=>removeItemHandler(items)}>REMOVE</RemoveBtn>
                </UL>
            ))}
        </CartDetails>
        <TotalQnt>Total Items: {Cart.length}</TotalQnt><br/>
        <TotalPrice>Total Price : Rs {totalPrice}</TotalPrice><br/>
        <PurchaseBtn onClick={onClickhandler}>Purchase</PurchaseBtn>
    </Container>
  )
}

export default Cart