import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import ReservationModal from '../Components/ReservationModal.jsx';
import { useNavigate } from 'react-router-dom';

function Home() {

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

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

                  {/* Bloc1 Image1 le menu */}
                  <div
                     className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 relative group"
                     onClick={() => navigate('/menu')}>
                        <img 
                           src='/Image/HomeImage/RHUMERIE-1.jpg' 
                           alt="Bar menu" 
                           className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl sm:text-5xl md:text-7xl mb-2">Explorez Notre Sélection</h3>
                           <h1 className="text-orange-500 text-5xl sm:text-7xl md:text-9xl font-serif w-full leading-none">
                              <span className='text-white text-4xl sm:text-6xl md:text-8xl'>De</span> RHUMS</h1>
                        </div>
                  </div>
                  
                  {/* Block2 Phone Image2, bouton reservation*/}
                  <div className="col-span-1 row-span-2   relative group border-white border-2 absolute">
                     <div className='relative p-16 lg:p-12'>
                        <div className="md:p-5">
                           <img 
                              src='/Image/HomeImage/RHUMERIE-2.jpg' 
                              alt="Reservation" 
                              className="w-full h-full cursor-pointer mb-4 mt-0" 
                              onClick={openModal}
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
                  
                  {/* Bloc3 Image3 Event link */}
                  <div 
                     className= "col-span-1 row-span-2 relative group"
                     onClick={() => navigate('/evenement')}>
                        <img 
                           src='/Image/HomeImage/RHUMERIE-3.jpg' 
                           alt="Bar event" 
                           className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl sm:text-5xl md:text-6xl mb-2">Célébrations Inoubliables</h3>
                           <h1 className="text-orange-500 text-5xl sm:text-7xl font-serif w-full leading-none">GARANTIES</h1>
                        </div>
                  </div>
                  
                  {/* Bloc4 reservation pour un evenement bouton, texte */}
                  <div className= "col-span-1 row-span-2 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2 relative group border-white border-2">
                     <div className="relative flex flex-col items-center justify-center h-full w-full p-4 sm:p-8">
                        <div className="text-center">
                           <h1 className="text-orange-500 text-4xl sm:text-6xl font-serif w-full leading-none">Event</h1>
                           <h3 className="text-white text-3xl sm:text-5xl mb-2">FOR PARTY <span className="text-orange-500">?</span></h3>
                        </div>
                        <div className="mt-8">
                           <button className="text-xl sm:text-2xl border-white border-2 px-4 py-2 sm:py-4 bg-transparent text-white rounded-md transition duration-300 hover:bg-white hover:text-black w-ful">
                           Find Out
                           </button>
                        </div>
                     </div>
                  </div>
                  
                  {/* Bloc5 Image4 img caree link menu */}
                  <div 
                     className= "col-span-1 row-span-1 relative group" 
                     onClick={() => navigate('/menu')}>
                     <div className="relative">
                        <img
                           src='/Image/HomeImage/RHUMERIE-4.jpg' 
                           alt="Meilleure Rhum" 
                           className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2"/>
                     </div>
                     <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white text-3xl sm:text-5xl mb-2">Profitez De Cocktails</h3>
                        <h1 className="text-orange-500 text-4xl sm:text-6xl font-serif w-full leading-none">EXQUIS</h1>
                     </div>
                  </div>

                  {/* Block6 plat Texte no link */}
                  <div className= "col-span-1 row-span-0.5 sm:col-span-2 sm:row-span-1 relative group border-white border-2">
                     <div className="text-center flex flex-col relative items-center justify-center h-full p-4">
                        <h1 className="text-orange-500 text-3xl sm:text-5xl font-serif w-full leading-none">Voted as</h1>
                        <h3 className="text-white text-3xl sm:text-5xl mb-2">THE BEST BAR IN AREA<span className="text-orange-500">.</span></h3>
                     </div>
                  </div>
                  
                  {/* Bloc7 Image5 img plate link evenement */}
                  <div 
                     className= "col-span-1 row-span-0.5 sm:col-span-2 sm:row-span-1 relative group"
                     onClick={() => navigate('/evenement')}>
                        <img 
                           src='/Image/HomeImage/RHUMERIE-5.jpg'
                           alt="Moment unique" 
                           className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h1 className="text-white text-3xl sm:text-5xl mb-2">Vivez Des Moments</h1>
                           <h3 className="text-orange-500 text-4xl sm:text-7xl font-serif w-full leading-none">UNIQUES</h3>
                        </div>
                  </div>
                  
                  {/* Bloc8 Image6 img caree no link */}
                  <div className= "col-span-1 row-span-1 relative group border-white border-2">
                        <img
                           src='/Image/HomeImage/RHUMERIE-6.jpg'
                           alt="cover" 
                           className="w-full h-full object-cover cursor-pointer" 
                        />
                  </div>
                  
                  {/* Bloc9 Image7 img caree link menu */}
                  <div 
                     className= "col-span-1 row-span-1 relative group"
                     onClick={() => navigate('/menu')}>
                        <img 
                           src='/Image/HomeImage/RHUMERIE-7.jpg'
                           alt="Soirée magique"
                           className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl sm:text-5xl mb-2">Savourez Des Shots</h3>
                           <h1 className="text-orange-500 text-4xl sm:text-6xl font-serif w-full leading-none">Exotiques</h1>
                        </div>
                  </div>
                  
                  {/* Block10 Image8 img caree no link */}
                  <div className= "col-span-1 row-span-1 relative group border-white border-2">
                     <div className="relative">
                        <img 
                           src='/Image/HomeImage/RHUMERIE-8.jpg'
                           alt="cover" 
                           className="w-full h-full object-cover cursor-pointer"/>
                     </div>
                  </div>
                  
                  {/* Block11 Image9 img caree link evenement */}
                  <div 
                     className= "col-span-1 row-span-1 relative group"
                     onClick={() => navigate('/evenement')}>
                        <img 
                           src='/Image/HomeImage/RHUMERIE-9.jpg'
                           alt="musique en live" 
                           className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform group-hover:scale-105 group-hover:brightness-75 group-hover:border-white border-transparent border-2" 
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           <h3 className="text-white text-3xl sm:text-5xl mb-2">Talent Brut Et Musique</h3>
                           <h1 className="text-orange-500 text-4xl sm:text-7xl font-serif w-full leading-none">en LIVE</h1>
                        </div>
                  </div>
                  
                  {/* Block12 Image10 img caree link */}
                  <div className= "col-span-1 row-span-1  relative group border-white border-2">
                     <div className="relative">
                        <img 
                           src='/Image/HomeImage/RHUMERIE-10.jpg'
                           alt="cover" 
                           className="w-full h-full cursor-pointer"/>
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
