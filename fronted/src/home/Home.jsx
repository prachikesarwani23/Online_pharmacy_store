import React from 'react';
import Navbar from '../componets/Navbar';
import Banner from '../componets/Banner';
import Footer from '../componets/Footer';
import Categories from '../componets/Categories';
import Offer from '../componets/offer';

function Home() {
  return (
    <>
<Navbar/>
<Banner/>
<Categories/>
<Offer/>
<Footer/>
    </>
  );
}

export default Home;
