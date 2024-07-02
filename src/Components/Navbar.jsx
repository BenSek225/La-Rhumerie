import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniPage from './MiniPage';

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isMiniPageOpen, setIsMiniPageOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const toggleMiniPage = () => {
      setIsMiniPageOpen(!isMiniPageOpen);
   };

   return (
      <nav className="bg-black text-white p-6">
         <div className="container mx-auto flex justify-between items-center">
            <Link to="/">
               <img src="/Logo/RHUMERIE.png" alt="Logo" className='w-40 h-12 md:w-48 md:h-12 lg:w-56 lg:h-14'/>
            </Link>

            <ul className="hidden md:flex space-x-4">
               <Link to="/" className="hover:text-orange-500 tracking-widest text-lg font-bold">Accueil</Link>
               <Link to="/menu" className="hover:text-orange-500 tracking-widest text-lg font-bold">Menu</Link>
               <Link to="/evenement" className="hover:text-orange-500 tracking-widest text-lg font-bold">Événements</Link>
               <li className="hover:text-orange-500 tracking-widest text-lg font-bold"><a href="#contact">Contact</a></li>
            </ul>

            <div className="md:hidden">
               <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
               </button>
            </div>

            {/* Hamburger icon for large screens to open side panel */}
            <div className="hidden md:flex">
               <button onClick= {toggleMiniPage} className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
               </button>
            </div>
         </div>

         {/* Menu déroulant pour les appareils mobiles */}
         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-opacity duration-700 ease-in-out`}>
            <ul className="flex flex-col mt-4">
               <Link to="/" className={`hover:text-orange-500 text-center transition-transform duration-700 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} border-b border-gray-500 pb-2`}>Accueil</Link>
               <Link to="/menu" className={`hover:text-orange-500 text-center transition-transform duration-700 ease-out transform ${isOpen ? 'translate-x-0 delay-200' : 'translate-x-full delay-200'} border-b border-gray-500 pb-2`}>Menu</Link>
               <Link to="/evenement" className={`hover:text-orange-500 text-center transition-transform duration-700 ease-out transform ${isOpen ? 'translate-x-0 delay-300' : 'translate-x-full delay-300'} border-b border-gray-500 pb-2`}>Événements</Link>
               <li className={`hover:text-orange-500 text-center transition-transform duration-700 ease-out transform ${isOpen ? 'translate-x-0 delay-400' : 'translate-x-full delay-400'} pb-2`}><a href="#contact">Contact</a></li>
            </ul>
         </div>

         {/* MiniPage for large screens */}
         {isMiniPageOpen && <MiniPage toggleMiniPage={toggleMiniPage} />}
      </nav>
   );
};

export default NavBar;
