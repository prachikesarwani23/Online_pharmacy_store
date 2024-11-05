import React from 'react';
import Navbar from '../componets/Navbar';
import Categories_page from '../componets/Categories_page';
import Footer from '../componets/Footer';
import list from '../../public/list.json';
import Categories from '../componets/Categories';

function Category() {
    console.log(list);
  return (
    <>
   <Navbar/>
  <div className='min-h-screen'>
  <Categories_page/>
  <Categories/>
  </div>
   <Footer/>
</>
  );
}

export default Category;
