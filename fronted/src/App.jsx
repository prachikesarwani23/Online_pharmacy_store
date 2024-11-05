import React from 'react';
import Home from './Home/home';
import { Route, Routes } from "react-router-dom";
import Category from './categories/Category';
import Product from './Products/Product';
import SignUp from './componets/SignUp';
import About from './Abouts/About';
import Contact from './componets/contact';

function App() {
  return (
   <>
   
 {/* <Home/>
 <Categories_page/> */}
 
 <div className='dark:bg-slate-900 dark:text-white'>
 
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Categories_page" element={<Category/>}/>
  <Route path="/Product_page" element={<Product/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  </Routes>
 </div>
    </>
  );
}

export default App;

