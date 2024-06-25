import React from 'react';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Menu = () => {
  // Données simulées pour les sections Rhum et Bière
   const rhums = [
      { id: 1, name: 'Rhum 1', image: '/Image/img-6.jpg' },
      { id: 2, name: 'Rhum 2', image: '/Image/img-3.jpg' },
      { id: 3, name: 'Rhum 3', image: '/Image/img-1.jpg' },
      // Ajoutez d'autres rhums si nécessaire
   ];

   const bieres = [
      { id: 1, name: 'Bière 1', image: 'Image/img-2.jpg' },
      { id: 2, name: 'Bière 2', image: '/Image/img-4.jpg' },
      { id: 3, name: 'Bière 3', image: '/Image/img-4.jpg' },
      // Ajoutez d'autres bières si nécessaire
   ];

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
               <div key={rhum.id} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={rhum.image} alt={rhum.name} className="w-full h-auto" />
                  <div className="text-center mt-2">
                     <p className="text-gray-800 font-bold">{rhum.name}</p>
                  </div>
               </div>
               ))}
            </div>
         </section>

         <section>
            <div className="bg-orange-500 py-2 px-4 mb-4">
               <h2 className="text-white text-2xl font-bold">Bière</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
               {bieres.map((biere) => (
               <div key={biere.id} className="bg-white p-4 rounded-lg shadow-md">
                  <img src={biere.image} alt={biere.name} className="w-full h-auto" />
                  <div className="text-center mt-2">
                     <p className="text-gray-800 font-bold">{biere.name}</p>
                  </div>
               </div>
               ))}
            </div>
         </section>
         </div>
         <Footer />
      </div>
   );
};

export default Menu;