// BoissonDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BoissonDetails = ({ boissons }) => {
   const { id } = useParams();
   const boisson = boissons.find((b) => b.id === parseInt(id));

   if (!boisson) {
      return <div>Boisson non trouvée</div>;
   }

   return (
      <div className="bg-black text-white">
         <Navbar />
         <div className="container mx-auto p-4">
            <div className="text-center py-4 bg-black" style={{ height: '150px', backgroundColor: '#000000' }}>
               <p className="text-orange-500">La rhumerie</p>
               <h2 className="text-4xl font-bold">{boisson.name}<span className="text-orange-500">.</span></h2>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-start mt-8">
               <div className="lg:w-2/3">
                  <img src={boisson.image} alt={boisson.name} className="w-full h-auto mb-4 lg:mb-0" />
               </div>
               <div className="lg:w-1/3 lg:pl-8">
                  <h4 className="text-2xl font-bold mb-4">Details</h4>
                  <div className="mb-2">
                     <span className="font-bold">Nom:</span>
                     <span className="ml-2">{boisson.name}</span>
                  </div>
                  <div className="mb-2">
                     <span className="font-bold">Prix:</span>
                     <span className="ml-2">{boisson.price} {boisson.currency}</span>
                  </div>
                  <div className="mb-2">
                     <span className="font-bold">Type:</span>
                     <span className="ml-2">{boisson.type}</span>
                  </div>
                  <div className="mb-2">
                     <span className="font-bold">Intrants:</span>
                     <span className="ml-2">{boisson.entrants}</span>
                  </div>
               </div>
            </div>

            <div className="mt-8">
               <h4 className="text-2xl font-bold mb-4">Description</h4>
               <p>{boisson.description}</p>
            </div>

            {/* <div className="mt-8">
               <h4 className="text-2xl font-bold mb-4">Follow and Share</h4>
               <div className="flex space-x-4">
                  <a href="#" className="bg-blue-500 text-white p-2 rounded-full"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="bg-blue-400 text-white p-2 rounded-full"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="bg-blue-700 text-white p-2 rounded-full"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="bg-pink-500 text-white p-2 rounded-full"><i className="fab fa-tumblr"></i></a>
               </div>
            </div> */}
         </div>
         <Footer />
      </div>
   );
};

export default BoissonDetails;
