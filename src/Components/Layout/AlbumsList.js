import React from 'react'
import classes from '../../Components/Layout/AlbumsList.module.css'
import { CartProducts } from '../Cart/Products';


function AlbumsList() {


  return (
    <section className={classes.albumSection}>
        {CartProducts.map((album)=>{
            return(
                <ul key={album.id} className={classes.musicContainer}>
                    {/* <h3>{album.album}</h3> */}
                    <li className={classes.musicDetail}>{album.title}</li>
                    <li className={classes.musicImage}><img src={album.imageUrl}/></li>
                    <li className={classes.musicDetail}>Rs: {album.price}
                    <button className={classes.musicBtn} onClick={() => addItems(contextItems.id)}>ADD TO CART</button></li> 

                </ul>
            );
        })}
    </section>
  );
  }


export default AlbumsList