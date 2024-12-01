import React, { useEffect, useState } from 'react';
import Navbar from '../componets/Navbar';
import Product_page from '../componets/Product_page';
import Footer from '../componets/Footer';

// import list_for_product from '../../public/list_for_product.json';
import axios from "axios"


function Product() {

  const [up1,setmedi]=useState([])
  useEffect(()=>{
    const getform1=async()=>{
      try{
            const res= await axios.get("http://localhost:4001/Pharmacystore/app");
            console.log(res.data)
            setmedi(res.data)

      }catch(error){
console.log(error)
      }
    }
    getform1();
  },[])


  console.log(up1);
  return (
   <>
   
    <Navbar/>
   <div className='min-h-screen'>
 
   <Product_page/>
  
  
   </div>
     <Footer/>
    
    </>
  );
}

export default Product;
