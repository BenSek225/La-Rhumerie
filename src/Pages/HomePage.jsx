import React, { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import ReservationModal from '../Components/ReservationModal.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
   };

   return (
      <div className='oswald'>
         <Navbar />
         <div className="px-10 py-5 bg-black">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">

                  <div
                     className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 relative group"
                     onClick={() => navigate('/menu')}>
                        <img 
                           src='/Image/img-1.jpg' 
                           alt="Bar menu" 
                           className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl sm:text-5xl md:text-7xl mb-2">Notre menu</h3>
                           <h1 className="text-orange-500 text-5xl sm:text-7xl md:text-9xl font-serif w-full leading-none">RHUM</h1>
                        </div>
                  </div>
                  
                  <div className="col-span-1 row-span-2   relative group border-white border-2 absolute">
                     <div className='relative p-20 lg:p-10 '>
                        <div className="p-5">
                           <img 
                              src='/Image/img-7.png' 
                              alt="Reservation" 
                              className="w-full h-auto cursor-pointer mb-4 mt-0" 
                           />
                        </div>
                        <button 
                           className="mt-10 rounded-md bg-orange-500 text-white px-2 py-2 sm:py-4 transition duration-300 hover:bg-white hover:text-black w-full"
                           onClick={openModal}
                        >
                           Book a table
                        </button>
                     </div>
                  </div>
                  
                  <div 
                     className= "col-span-1 row-span-2 relative group"
                     onClick={() => navigate('/evenement')}>
                        <img 
                           src='/Image/img-2.jpg' 
                           alt="Bar event" 
                           className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl sm:text-5xl mb-2">À la une</h3>
                           <h1 className="text-orange-500 text-5xl sm:text-8xl font-serif w-full leading-none">Event</h1>
                        </div>
                  </div>
                  
                  <div className= "col-span-1 row-span-2 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2 relative group border-white border-2">
                     <div className="relative flex flex-col items-center justify-center h-full w-full p-4 sm:p-8">
                        <div className="text-center">
                           <h1 className="text-orange-500 text-3xl sm:text-5xl font-serif w-full leading-none">Event</h1>
                           <h3 className="text-white text-3xl sm:text-5xl mb-2">FOR PARTY <span className="text-orange-500">?</span></h3>
                        </div>
                        <div className="mt-8">
                           <button className="text-xl sm:text-2xl border-white border-2 px-4 py-2 sm:py-4 bg-transparent text-white rounded-md transition duration-300 hover:bg-white hover:text-black w-ful">
                           Find Out
                           </button>
                        </div>
                     </div>
                  </div>
                  
                  <div className= "col-span-1 row-span-1 relative group border-white border-2">
                     <div className="relative">
                        <img
                           src='/Image/img-8.png' 
                           alt="Bar" 
                           className="w-full h-auto object-cover cursor-pointer p-2 mt-3"/>
                     </div>
                  </div>
                  
                  <div className= "col-span-1 row-span-0.5 sm:col-span-2 sm:row-span-1 relative group border-white border-2">
                     <div className="text-center flex flex-col relative items-center justify-center h-full p-4">
                        <h1 className="text-orange-500 text-3xl sm:text-5xl font-serif w-full leading-none">Voted as</h1>
                        <h3 className="text-white text-3xl sm:text-5xl mb-2">THE BEST BAR IN NYC<span className="text-orange-500">.</span></h3>
                     </div>
                  </div>
                  
                  <div 
                     className= "col-span-1 row-span-0.5 sm:col-span-2 sm:row-span-1 relative group"
                     onClick={() => navigate('/')}>
                        <img 
                           src='/Image/img-3.jpg' 
                           alt="Bar" 
                           className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-orange-500 text-3xl sm:text-7xl font-serif w-full leading-none">Paiya</h3>
                           <h1 className="text-white text-2xl sm:text-5xl mb-2">La source naturel</h1>
                        </div>
                  </div>
                  
                  <div 
                     className= "col-span-1 row-span-1 relative group"
                     onClick={() => navigate('/')}>
                        <img
                           src='/Image/img-5.jpg' 
                           alt="Bar" 
                           className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-2xl sm:text-3xl mb-2">La tendance</h3>
                           <h1 className="text-orange-500 text-3xl sm:text-5xl font-serif w-full leading-none">C'est chez nous.</h1>
                        </div>
                  </div>
                  
                  <div 
                     className= "col-span-1 row-span-1 relative group"
                     onClick={() => navigate('/')}>
                        <img 
                           src='/Image/img-5.jpg' 
                           alt="Bar"
                           className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl mb-2">Deviens</h3>
                           <h1 className="text-orange-500 text-2xl sm:text-5xl font-serif w-full leading-none">UNIQUE.</h1>
                        </div>
                  </div>
                  
                  <div className= "col-span-1 row-span-1 relative group border-white border-2">
                     <div className="relative">
                        <img 
                           src='/Image/img-9.png' 
                           alt="Bar" 
                           className="w-full h-auto object-cover cursor-pointer"/>
                     </div>
                  </div>
                  
                  <div 
                     className= "col-span-1 row-span-1 relative group"
                     onClick={() => navigate('/')}>
                        <img 
                           src='/Image/img-6.jpg' 
                           alt="Bar" 
                           className="w-full h-auto object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-2xl sm:text-5xl mb-2">Viens prendre un</h3>
                           <h1 className="text-orange-500 text-3xl sm:text-7xl font-serif w-full leading-none">Verre.</h1>
                        </div>
                  </div>
                  
                  <div className= "col-span-1 row-span-1  relative group border-white border-2">
                     <div className="relative">
                        <img 
                           src='/Image/img-10.png' 
                           alt="Bar" 
                           className="p-6 w-full h-auto cursor-pointer"/>
                     </div>
                  </div>
            </div>
         </div>
         <Footer />
         {isModalOpen && <ReservationModal closeModal={closeModal} />}
      </div>
   );
}

export default Home;
