// Menu.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Menu = ({ boissons }) => {
   
   if (!boissons) {
      return <div>Chargement...</div>;
   }

   const rhums = boissons.filter((boisson) => boisson.name.toLowerCase().includes('rhum'));
   const bieres = boissons.filter((boisson) => boisson.name.toLowerCase().includes('bière'));

   return (
      <div className="bg-black">

         <NavBar />

         <div className="container mx-auto p-4">

            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Rhum</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {rhums.map((rhum) => (
                  <Link key={rhum.id} to={`/boisson/${rhum.id}`} className="bg-white p-4 rounded-lg shadow-md">
                     <img src={rhum.image} alt={rhum.name} className="w-full h-auto" />
                     <div className="text-center mt-2">
                        <p className="text-gray-800 font-bold">{rhum.name}</p>
                     </div>
                  </Link>
                  ))}
               </div>
            </section>

            <section>
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Bière</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {bieres.map((biere) => (
                  <Link key={biere.id} to={`/boisson/${biere.id}`} className="bg-white p-4 rounded-lg shadow-md">
                     <img src={biere.image} alt={biere.name} className="w-full h-auto" />
                     <div className="text-center mt-2">
                        <p className="text-gray-800 font-bold">{biere.name}</p>
                     </div>
                  </Link>
                  ))}
               </div>
            </section>
         </div>
         <Footer />
      </div>
   );
};

export default Menu;
