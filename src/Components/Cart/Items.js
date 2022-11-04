import React,{useContext} from 'react'
import styles from './CartData.module.css'
import { Container, Row, Col, Button } from "reactstrap";



function Items({id, title, price, imageUrl, quantity}) {

    const {removeItem} = useContext(CartContext);

  return (
    <div>
        <Container style={{ marginTop: "20px" }}>
                <Row>
                  <Col xs="4">
                    <Col xs="4">
                      <img className={styles.cartImages} src={imageUrl} />
                    </Col>
                    <Col xs='4' className={styles.cartTitle}>{title}</Col>
                  </Col>
                  
    
                  <Col xs="4">${price} </Col>
    
                  <Col xs="4"><input className={styles.cartInput} type='number' value={quantity}/></Col>
                  <Col><button className={styles.Button} onClick={()=>removeItem(id)}>REMOVE</button></Col>
                  <hr/>
                </Row>
    
        </Container>
    </div>
  )
}

export default Items