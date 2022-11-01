import React from 'react'
import classes from '../../Components/Layout/AlbumsList.module.css'
const productsArr = [

    {
    id:1,
    album:'Album  1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    
    {
    id:2,
    album:'Album  2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    id:3,
    album:'Album  3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',   
    },
    
    {
    id:4,
    album:'Album  4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
    
    

function AlbumsList() {
  return (
    <section className={classes.albumSection}>
        {productsArr.map((album)=>{
            return(
                <ul key={album.id} className={classes.musicContainer}>
                    <h3>{album.album}</h3>
                    <li className={classes.musicDetail}>{album.title}</li>
                    <li className={classes.musicImage}><img src={album.imageUrl}/></li>
                    <li className={classes.musicDetail}>Rs: {album.price}
                    <button className={classes.musicBtn}>ADD TO CART</button></li> 

                </ul>
            );
        })}
    </section>
  );
  }


export default AlbumsList