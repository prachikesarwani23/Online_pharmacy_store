import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import Aboutus from '../componets/Aboutus';
function About() {
  return (
  <>
  
 <Navbar/> 
 
<div className='min-h-screen'>
<Aboutus/>
</div>
  <Footer/>
  </>
  );
}

export default About;

