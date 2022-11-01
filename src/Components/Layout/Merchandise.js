import React from 'react'
import classes from '../../Components/Layout/Merchandise.module.css'

const merchandiseList = [
    {
        id:1,
        merchant:'T-SHIRT',
        title:'Colored Tshirt',
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Shirt.png',
        price:500
    },
    {
        id:2,
        merchant:'COFFEE CUP',
        title:'coffee cup',
        imageUrl:'https://prasadyash2411.github.io/ecom-website/img/Cofee.png',
        price:500
    }
]

function Merchandise() {
  return (
    <section className={classes.merchantSection}>
        {merchandiseList.map((merchant) =>{
            return(
                <ul key={merchant.id} className={classes.merchantContainer}>
                    <h3>{merchant.merchant}</h3>
                    <li className={classes.merchantDetail}>{merchant.title}</li>
                    <li className={classes.merchantImage}><img src={merchant.imageUrl}/></li>
                    <li className={classes.merchantDetail}>Rs: {merchant.price}
                    <button className={classes.merchantBtn}>ADD TO CART</button></li>
                    
                </ul>
            );
        } )}   
    </section>
  )
}

export default Merchandise