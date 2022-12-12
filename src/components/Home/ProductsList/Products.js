import React, { useContext, useState, useEffect } from 'react'
import ProductItems from './ProductItems'
import { CartContext } from '../../Store/Context'
import styled from 'styled-components'


const Container = styled.div`padding:20px; display:flex;
flex-wrap:wrap; justify-content:space-between;`;
function Products() {
    const {state:{products}} = useContext(CartContext);

    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [httpError, setHttpError] = useState();

    // useEffect(() => {
    //     const fetchMeals = async () => {
    //       const response = await fetch('https://ecommerce-website-data-default-rtdb.firebaseio.com/MusicProducts.json');
    
    //       if (!response.ok) {
    //         throw new Error('Something went wrong!');
    //       }
    
    //       const responseData = await response.json();
    
    //       const loadedMeals = [];
    
    //       for (const key in responseData) {
    //         loadedMeals.push({
    //           id: key,
    //           title: responseData[key].title,
    //           price: responseData[key].price,
    //           imageUrl: responseData[key].imageUrl,
    //         });
    //       }
    
    //       setProducts(loadedMeals);
    //       console.log(loadedMeals);
    //       console.log(products)
    //       setIsLoading(false);
    //     };
    
    //     fetchMeals().catch((error) => {
    //       setIsLoading(false);
    //       setHttpError(error.message);
    //     });
    //   }, []);
    
    //   if (isLoading) {
    //     return (
    //       <section>
    //         <p>Loading...</p>
    //       </section>
    //     );
    //   }
    
    //   if (httpError) {
    //     return (
    //       <section >
    //         <p>{httpError}</p>
    //       </section>
    //     );
    //   }
  return (
    <Container>
        {products.map((prods)=>(
            <ProductItems data={prods} key={prods.id}/>
        ))} 
    </Container>
  )
}

export default Products