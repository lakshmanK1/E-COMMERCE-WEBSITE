import React, { useContext, useState } from "react";
import styled from "styled-components";
import ProductsPageNavBar from "../HeaderNavs/ProductsPageNavBar";
import { CartContext } from "../Store/Context";
import { useParams } from "react-router-dom";
import Cart from "../Cart/Cart";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ReactImageMagnify from "react-image-magnify";

const Container = styled.div`
  margin-top: 70px;
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

function MerchSingleProductPage() {
  const [cartHandle, setCartHandle] = useState(false);

  const {
    state: { merchants },
  } = useContext(CartContext);
  const param = useParams();
  console.log(param.id);
  const product = merchants.find((product) => product.id === param.id);
  const { title, imageUrl, price, id } = product;

  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const showCart = () => {
    setCartHandle(true);
  };

  const hideCart = () => {
    setCartHandle(false);
  };

  const addToCart = () => {
    return dispatch({
      type: "ADD",
      payload: product,
    });
  };
  const removeFromCart = () => {
    return dispatch({
      type: "REMOVE",
      payload: product,
    });
  };
  console.log(cart);

  return (
    <Container>
      <ProductsPageNavBar onShowCart={showCart} />
      <Wrapper key={id}>
        <ImageContainer>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: imageUrl,
              },
              largeImage: {
                src: imageUrl,
                width: 1500,
                height: 2000,
              },
            }}
          style={{width: '500px',height: '500px',
            objectFit: 'cover'}}/>
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Description>
          <AmountContainer>
            <AiFillStar
              style={{ color: "yellow", width: "30px", height: "30px" }}
            />
            <AiFillStar
              style={{ color: "yellow", width: "30px", height: "30px" }}
            />
            <AiFillStar
              style={{ color: "yellow", width: "30px", height: "30px" }}
            />
            <AiOutlineStar style={{ width: "30px", height: "30px" }} />
            <AiOutlineStar style={{ width: "30px", height: "30px" }} />
          </AmountContainer>
          <Price>{price}</Price>
          <AddContainer>
            {cart.some((p) => p.id === id) ? (
              <Button onClick={removeFromCart}>REMOVE FROM CART</Button>
            ) : (
              <Button onClick={addToCart}>ADD TO CART</Button>
            )}
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {cartHandle && <Cart onHideCart={hideCart} />}
    </Container>
  );
}

export default MerchSingleProductPage;
