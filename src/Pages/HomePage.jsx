import React from 'react';
import NavBar from '../Components/NavBar.jsx';
import Footer from '../Components/Footer.jsx';
import Events from '../Components/Events.jsx';

function Home() {
   return (
      <div className="bg-black">
         <NavBar />
         <Events />
         <Footer />
      </div>
    );
}

export default Home;
