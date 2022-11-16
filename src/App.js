import React, { useContext } from 'react'
import Context from './components/Store/Context'
import {  Route , Routes} from "react-router-dom";
import ProductsStore from './components/Home/ProductsStore'
import Home from './components/Home/Pages/Home'
import AboutUs from './components/Home/Pages/AboutUs'
import ContactUs from './components/Home/Pages/ContactUs';
import SinglePageProduct from './components/SingleProductPages/SinglePageProduct';
import MerchSingleProductPage from './components/SingleProductPages/MerchSingleProductPage';
import LogInPage from './components/Authentication/LogInPage';
import { AuthContext } from './components/Store/AuthContext';
function App() {
  const {isLoggedIn} = useContext(AuthContext)
  return (
    <Context>

      <Routes>
        {!isLoggedIn && <Route exact path='/signup&login' element={<LogInPage/>}/>}
        <Route exact path='/' element={<Home/>}/>
        {isLoggedIn && <Route exact path='/dynamicStore.html' element={<ProductsStore/>}/>}
        <Route exact path='/about.html' element={<AboutUs/>}/>
        <Route exact path='/contactUs.html' element={<ContactUs/>}/>
        {isLoggedIn && <Route exact path='/dynamicStore.html/singleproduct/:id' element={<SinglePageProduct/>}/>}
       {isLoggedIn && <Route exact path='/dynamicStore.html/merchantproduct/:id' element={<MerchSingleProductPage/>}/>}
      </Routes>
      

    </Context>
  )
}

export default App
