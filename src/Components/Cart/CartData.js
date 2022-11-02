import React ,{useContext}from 'react'
import styles from './CartData.module.css'
import { Container, Row, Col, Button } from "reactstrap";
import {CartContext} from './Cart';


// const cartElements = [
//     {
//       title: "Colors",
//       price: 100,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//       quantity: 2,
//     },
  
//     {
//       title: "B & w Colors",
//       price: 50,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//       quantity: 3,
//     },
  
//     {
//       title: "Y & B Colors",
//       price: 70,
//       imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//       quantity: 1,
//     },
//   ];
function CartData(props) {
    const DisplayItems = useContext(CartContext);
    const styleBtn = {
        'marginLeft': '72%',
        'height': '40px',
        'marginTop' : '2%',
      }
      return (
        <section className={styles.cartBody}>
          <Button style={styleBtn} onClick={props.Notshow}>X</Button>
          <h2 className={styles.cartHeading}>CART</h2>
    
          <Row>
            <Col xs="4">
              <span className={styles.headText}>Item</span>
              <hr />
            </Col>
            <Col xs="4">
              <span className={styles.headText}>Price</span>
              <hr/>
            </Col>
            <Col xs="4">
              <span className={styles.headText}>Quantity</span>
              <hr />
            </Col>
          </Row>
          {DisplayItems.map((items) => {
            return (
              <Container style={{ marginTop: "20px" }}>
                <Row>
                  <Col xs="4">
                    <Col xs="4">
                      <img className={styles.cartImages} src={items.imageUrl} />
                    </Col>
                    <Col xs='4' className={styles.cartTitle}>{items.title}</Col>
                  </Col>
                  
    
                  <Col xs="4">${items.price} </Col>
    
                  <Col xs="4"><input className={styles.cartInput} type='number' value={items.quantity}/></Col>
                  <Col><button className={styles.Button}>REMOVE</button></Col>
                  <hr/>
                </Row>
    
              </Container>
            );
          })}
          <h2 className={styles.cartHeading}>Total Amount: 750</h2>
          <button className={styles.PurchaseBtn}>Purchase</button>
          </section>
      );
}

export default CartData