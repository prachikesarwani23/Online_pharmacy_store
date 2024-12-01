import React from 'react';
import Home from './Home/home';
import { Navigate, Route, Routes } from "react-router-dom";
import Category from './categories/Category';
import Product from './Products/Product';
import SignUp from './componets/SignUp';
import About from './Abouts/About';
import Contact from './componets/contact';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './contest/AuthProvider';

function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
   <>
   
 {/* <Home/>
 <Categories_page/> */}
 
 <div className='dark:bg-slate-900 dark:text-white'>
 
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Categories_page" element={authUser?<Category/>:<Navigate to="/signup"/>}/>
  <Route path="/Product_page" element={authUser?<Product/>:<Navigate to="/signup"/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={authUser? <Contact/>:<Navigate to="/signup"/>}/>
  <Route path="/signup" element={<SignUp/>}/>
  </Routes>
  <Toaster />
 </div>
    </>
  );
}

export default App;

