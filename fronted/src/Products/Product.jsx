import React from 'react';
import Navbar from '../componets/Navbar';
import Product_page from '../componets/Product_page';
import Footer from '../componets/Footer';

import list_for_product from '../../public/list_for_product.json';



function Product() {
  console.log(list_for_product);
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
