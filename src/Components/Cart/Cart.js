import React,{useContext} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import styles from './Cart.module.css'
import { CartProducts } from "./Products";
import CartContext from "../Store/CartContext";


const Cart = (props) => {

  const cartCntx = useContext(CartContext);

  const totalAmount = cartCntx.totalAmount;

  const removeItemHandler = (id) =>{
    cartCntx.removeItem(id);
  }

  const styleBtn = {
    'marginLeft': '72%',
    'height': '40px',
    'marginTop' : '2%',
  }
  return (
    
    <section className={styles.cartBody}>
      <Button style={styleBtn} onClick={props.onHideCart}>X</Button>
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
      {cartCntx.items.map((items) => {
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
              <Col><button className={styles.Button} onClick={()=>removeItemHandler(items.id)}>REMOVE</button></Col>
              <hr/>
            </Row>

          </Container>
        );
      })}
      <h2 className={styles.cartHeading}>{`Total Amount : Rs: ${totalAmount}`}</h2>
      <button className={styles.PurchaseBtn}>Purchase</button>
      </section>
  );
};

export default Cart;