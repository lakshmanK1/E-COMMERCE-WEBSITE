import React from 'react'
import Context from './components/Store/Context'
import {  Route , Routes} from "react-router-dom";
import ProductsStore from './components/Home/ProductsStore'
import Home from './components/Home/Pages/Home'
import AboutUs from './components/Home/Pages/AboutUs'
import ContactUs from './components/Home/Pages/ContactUs';

function App() {
  return (
    <Context>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/dynamicStore.html' element={<ProductsStore/>}/>
        <Route exact path='/about.html' element={<AboutUs/>}/>
        <Route exact path='/contactUs.html' element={<ContactUs/>}/>
      </Routes>
      

    </Context>
  )
}

export default App
