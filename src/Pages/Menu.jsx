// Menu.jsx

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Menu = ({ boissons }) => {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   
   if (!boissons) {
      return <div>Chargement...</div>;
   }

   const creations = boissons.filter((boisson) => boisson.type.toLowerCase().includes('creation'));
   const cocktails = boissons.filter((boisson) => boisson.type.toLowerCase().includes('cocktail'));
   const rhums = boissons.filter((boisson) => boisson.type.toLowerCase().includes('rhum'));
   const cognacs = boissons.filter((boisson) => boisson.type.toLowerCase().includes('cognac'));
   const bieres = boissons.filter((boisson) => boisson.type.toLowerCase().includes('biere'));
   const whiskies = boissons.filter((boisson) => boisson.type.toLowerCase().includes('whiskie'));

   return (
      <div className="bg-black">

         <NavBar />

         <div className="container mx-auto p-4">

            {/* Section cocktails Creations en haut normalement */}
            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Créations</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {creations.map((creation) => (
                  <Link key={creation.id} to={`/boisson/${creation.id}`} className="bg-white p-4 rounded-lg shadow-md">
                     <img src={creation.image} alt={creation.name} className="w-full h-auto" />
                     <div className="text-center mt-2">
                        <p className="text-gray-800 font-bold">{creation.name}</p>
                     </div>
                  </Link>
                  ))}
               </div>
            </section>

            {/* Section cocktails */}
            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Cocktails</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cocktails.map((cocktail) => (
                  <Link key={cocktail.id} to={`/boisson/${cocktail.id}`} className="bg-white p-4 rounded-lg shadow-md">
                     <img src={cocktail.image} alt={cocktail.name} className="w-full h-auto" />
                     <div className="text-center mt-2">
                        <p className="text-gray-800 font-bold">{cocktail.name}</p>
                     </div>
                  </Link>
                  ))}
               </div>
            </section>

            {/* Section rhums */}
            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Rhums</h2>
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

            {/* Section Bières */}
            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Bières</h2>
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

                  {/* Autre tchai cognac */}
            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Cognacs</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cognacs.map((cognac) => (
                  <Link key={cognac.id} to={`/boisson/${cognac.id}`} className="bg-white p-4 rounded-lg shadow-md">
                     <img src={cognac.image} alt={cognac.name} className="w-full h-auto" />
                     <div className="text-center mt-2">
                        <p className="text-gray-800 font-bold">{cognac.name}</p>
                     </div>
                  </Link>
                  ))}
               </div>
            </section>

                  {/* Whiskies ici */}
            <section className="mb-8">
               <div className="bg-orange-500 py-2 px-4 mb-4">
                  <h2 className="text-white text-2xl font-bold">Whiskies</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {whiskies.map((whiskie) => (
                  <Link key={whiskie.id} to={`/boisson/${whiskie.id}`} className="bg-white p-4 rounded-lg shadow-md">
                     <img src={whiskie.image} alt={whiskie.name} className="w-full h-auto" />
                     <div className="text-center mt-2">
                        <p className="text-gray-800 font-bold">{whiskie.name}</p>
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
