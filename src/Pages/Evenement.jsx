import React from 'react';
import Footer from '../Components/Footer';
import Events from '../Components/Events';
import Navbar from '../Components/Navbar';

function Evenement() {
   return (
      <div className="bg-black"> 
         <Navbar />
         <Events />
         <Footer />
      </div>
   );
}

export default Evenement;