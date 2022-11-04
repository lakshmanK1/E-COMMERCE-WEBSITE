import './App.css';
import React, {useState} from 'react';
import Header from './Components/Header';
import Banner from './Components/Layout/Banner';
import AlbumsList from './Components/Layout/AlbumsList';
import MusicBanner from './Components/Re-usable/MusicBanner';
import Merchandise from './Components/Layout/Merchandise';
import MainFooter from './Components/Footer/MainFooter';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/Store/CartContextProvider';

function App() {
  const [cart, setCart] = useState(false);

  const ShowCart = () => {
    setCart(true);
  }

  const hideCart = () => {
    setCart(false);
  }
  return (
    <CartContextProvider>
      <Header onShowCart={ShowCart}/>
      <Banner/>
      <MusicBanner text='MUSIC'/>
      <AlbumsList/>
      <MusicBanner text='MERCHANDISE'/>
      <Merchandise/>
      <MainFooter/>
      {cart && <Cart onHideCart={hideCart}/>}

    </CartContextProvider>
  );
}

export default App;
