
import React, { useContext, useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { CartContext } from '../../Store/Context';
import{toast} from 'react-toastify'
import axios from 'axios';

const Container = styled.div`flex:1; max-width: 900px; margin:0 auto;
padding: 20px 30px;align-content: center; display:flex; flex-wrap: wrap;
justify-content:space-around;`;
const UL = styled.ul`align-content: center; display: inline-block;
margin: 30px; `;
const LI = styled.li`list-style:none;`;

const Title = styled.h3`font-weight:100;`;

const Image = styled.img`height: 250px;width:250px;overflow: hidden;
transform-origin: center center;object-fit: cover;
filter: brightness(100%);
:hover
{
  margin: 0px; overflow: inherit; transform: scale(1.1);
  z-index: 10; font-size: 1.15vw; box-shadow: 0px 7.5px 7.5px #93AAB6;
}`;

const Price = styled.span`display: flex;margin:8px;align-items: center;
justify-content: space-between;`;

const AddBtn = styled.button`cursor:pointer;padding:8px;color:white;
border:none;font-size:15px;font-weight: bold;border-radius: 4%;
background: #00aadc; margin-top:8px;
:hover
{
  background-color:white;
  color: #00aadc;
  border:2px solid #00AADC;
  margin: 0px;
  overflow: inherit;
  z-index: 10;
  font-size: 1.15vw;
  box-shadow: 0px 7.5px 7.5px #93AAB6;
}`;

const RemoveBtn = styled.button`cursor:pointer;padding:8px;color:white;
border:none;font-size:15px;font-weight: bold;border-radius: 4%;
background: red;margin-top:8px;
:hover
{
  background-color:white; color: red; border:2px solid red;
  margin: 0px; overflow: inherit;
  z-index: 10; font-size: 1.15vw; box-shadow: 0px 7.5px 7.5px #93AAB6;
}`;

function ProductItems(props) {
    const {state:{Cart,addItem,removeItem}} = useContext(CartContext);

    const enteredEmail = localStorage.getItem('email').replace('@','').replace('.','');
    
    const addItemHandler = (items) => {

    //   async function addHandler(NewMovieObj) {
    //     const response = await fetch(
    //       `https://ecommerce-site-533fb-default-rtdb.firebaseio.com/ProductItems/${enteredEmail}.json`,
    //       {
    //         method: "POST",
    //         body: JSON.stringify(NewMovieObj),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     const data = await response.json();
    //   }
    // addHandler(items);

    addItem(items);
    

      toast.success(`Added ${items.title} item to cart..`,{
        position:'bottom-right',
      });
    }
    

    // const fetchDataHandler = useCallback(async () => {
    //   try {
    //     const response = await fetch(
    //       `https://ecommerce-site-533fb-default-rtdb.firebaseio.com/ProductItems/${enteredEmail}.json`
    //     );
  
    //     if (!response.ok) {
    //       throw new Error("Something went wrong...retrying");
    //     }
  
    //     const data = await response.json();
    //     console.log(data);
  
    //     const transformedData = [];
  
    //     for (const key in data) {
    //       transformedData.push({
    //         id: key,
    //         title: data[key].title,
    //         price: data[key].price,
    //         imageUrl: data[key].imageUrl
    //       });
    //     }
    //     console.log(transformedData);
    //     addItem(transformedData)
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // }, []);
  
    // useEffect(() => {
    //   fetchDataHandler();
    // }, [fetchDataHandler]);

    const removeItemHandler = (id) => {
      removeItem(id);
      toast.error(`Removed ${id.title} item from cart..`,{
        position:'bottom-right',
      });
    }

  return (
    
    <Container>
        <UL key={props.data.id}>
            <LI><Title>{props.data.title}</Title></LI>
            <LI><Link to={`/dynamicStore.html/singleproduct/${props.data.id}`}><Image src={props.data.imageUrl}/></Link></LI>
            <LI><Price>RS: {props.data.price}</Price></LI>

            {
                Cart.some((p)=>p.id === props.data.id) ? (<RemoveBtn onClick={()=>removeItemHandler(props.data)}>REMOVE FROM CART</RemoveBtn>) 
                : (<AddBtn onClick={()=>addItemHandler(props.data)}>ADD TO CART</AddBtn>)
            }
            {/* <AddBtn onClick={()=>addItemHandler(props.data)}>ADD TO CART</AddBtn> */}

        </UL>
    </Container>
  )
}

export default ProductItems