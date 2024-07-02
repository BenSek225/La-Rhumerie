import React, { useEffect } from 'react';
import Footer from '../Components/Footer';
import Events from '../Components/Events';
import Navbar from '../Components/Navbar';

function Evenement() {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="bg-black"> 
         <Navbar />
         <Events />
         <Footer />
      </div>
   );
}

export default Evenement;