import React from 'react';
import NavBar from '../Components/Navbar';  // Assurez-vous que le nom du composant NavBar est correct
import Footer from '../Components/Footer';
import Events from '../Components/Events';

function MenuPage() {
  return (
    <div className="bg-black"> 
        <NavBar />
        <Events />
        <Footer />
    </div>
  );
}

export default MenuPage;
