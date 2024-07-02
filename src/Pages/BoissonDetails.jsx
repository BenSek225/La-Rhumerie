import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BoissonDetails = ({ boissons }) => {
   
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const { id } = useParams();
   const boisson = boissons.find((b) => b.id === parseInt(id));

   if (!boisson) {
      return <div className="text-white text-center mt-8">Boisson non trouvée</div>;
   }

   return (
      <div className="bg-black text-white min-h-screen flex flex-col justify-between">
         <Navbar />

         <div className="container mx-auto p-4 flex-grow">
            <div className="text-center py-4" style={{ backgroundColor: '#000000' }}>
               <p className="text-orange-500 md:text-2xl">La rhumerie</p>
               <h2 className="text-4xl md:text-6xl font-bold">{boisson.name}<span className="text-orange-500">.</span></h2>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-start mt-8">
               <div className="lg:w-2/3">
                  <img src={boisson.image} alt={boisson.name} className="w-full h-auto mb-4 lg:mb-0 rounded-lg shadow-md" />
               </div>
               <div className="lg:w-1/3 lg:pl-8 ms-3">
                  <h4 className="text-3xl md:text-4xl font-bold mb-4">Détails</h4>
                  <div className="mb-2 ms-5 md:text-2xl">
                     <span className="font-bold">Nom:</span>
                     <span className="ml-2">{boisson.name}</span>
                  </div>
                  <div className="mb-2 ms-5 md:text-2xl">
                     <span className="font-bold">Prix:</span>
                     <span className="ml-2">{boisson.price} {boisson.currency}</span>
                  </div>
                  <div className="mb-2 ms-5 md:text-2xl">
                     <span className="font-bold">Type:</span>
                     <span className="ml-2">{boisson.type}</span>
                  </div>
                  <div className="mb-2 ms-5 md:text-2xl">
                     <span className="font-bold">Ingrédients:</span>
                     <span className="ml-2">{boisson.intrants}</span>
                  </div>
               </div>

               <div className="mt-8 ms-3">
                  <h4 className="text-2xl font-bold mb-4 md:text-4xl">Description</h4>
                  <p className='ms-3 md:text-2xl'>{boisson.description}</p>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
};

export default BoissonDetails;
