import React, { createContext, useReducer } from "react";
// import { Container, Row, Col, Button } from "reactstrap";
import styles from './Cart.module.css'
import CartData from "./CartData";
import { CartProducts } from "./Products";
import { reducer } from "./Reducer";

export const CartContext = createContext(CartProducts);

const initialState = {
    DisplayItems: CartProducts,
    totalQuantity:0,
    totalPrice:0
}

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },

//   {
//     title: "B & w Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },

//   {
//     title: "Y & B Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type:"REMOVE",
            payload:id
        });
    }
    
    return(
        <CartContext.Provider value={{...state, removeItem}}>
            <CartData Notshow={props.onHideCart}/>
        </CartContext.Provider>
        
    );

//   const styleBtn = {
//     'marginLeft': '72%',
//     'height': '40px',
//     'marginTop' : '2%',
//   }
//   return (
//     <section className={styles.cartBody}>
//       <Button style={styleBtn} onClick={props.onHideCart}>X</Button>
//       <h2 className={styles.cartHeading}>CART</h2>

//       <Row>
//         <Col xs="4">
//           <span className={styles.headText}>Item</span>
//           <hr />
//         </Col>
//         <Col xs="4">
//           <span className={styles.headText}>Price</span>
//           <hr/>
//         </Col>
//         <Col xs="4">
//           <span className={styles.headText}>Quantity</span>
//           <hr />
//         </Col>
//       </Row>
//       {cartElements.map((items) => {
//         return (
//           <Container style={{ marginTop: "20px" }}>
//             <Row>
//               <Col xs="4">
//                 <Col xs="4">
//                   <img className={styles.cartImages} src={items.imageUrl} />
//                 </Col>
//                 <Col xs='4' className={styles.cartTitle}>{items.title}</Col>
//               </Col>
              

//               <Col xs="4">${items.price} </Col>

//               <Col xs="4"><input className={styles.cartInput} type='number' value={items.quantity}/></Col>
//               <Col><button className={styles.Button}>REMOVE</button></Col>
//               <hr/>
//             </Row>

//           </Container>
//         );
//       })}
//       <h2 className={styles.cartHeading}>Total Amount: 750</h2>
//       <button className={styles.PurchaseBtn}>Purchase</button>
//       </section>
//   );
};

export default Cart;



