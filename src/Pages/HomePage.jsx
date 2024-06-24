import React from 'react';
import Footer from '../Components/Footer.jsx';

function Home() {
   return (
      <div className="p-4">
         <h1 className="text-2xl font-bold">Bienvenue à la maison!</h1>
         <p className="mt-2">Ceci est la page d'accueil.</p>
         <Footer />
      </div>
   );
}
export default Home;
