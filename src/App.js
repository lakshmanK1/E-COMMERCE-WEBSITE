import React, { useContext } from 'react'
import Context from './components/Store/Context'
import {  Route , Routes} from "react-router-dom";
// import ProductsStore from './components/Home/ProductsStore'
import Home from './components/Home/Pages/Home'
import AboutUs from './components/Home/Pages/AboutUs'
import ContactUs from './components/Home/Pages/ContactUs';
// import SinglePageProduct from './components/SingleProductPages/SinglePageProduct';
// import MerchSingleProductPage from './components/SingleProductPages/MerchSingleProductPage';
import LogInPage from './components/Authentication/LogInPage';
import { AuthContext } from './components/Store/AuthContext';
import { Suspense } from 'react'

// For Tostify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductsStore = React.lazy(()=>import('./components/Home/ProductsStore'))
const SinglePageProduct = React.lazy(() => import('./components/SingleProductPages/SinglePageProduct'));
const MerchSingleProductPage = React.lazy(() => import('./components/SingleProductPages/MerchSingleProductPage'));


function App() {
  const {AuthContextValues:{isLoggedIn}} = useContext(AuthContext)

  return (
    <Suspense fallback={<center><h2>Loading...</h2></center>}>
    <Context>
    <ToastContainer />
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
    </Suspense>
  )
}

export default App
