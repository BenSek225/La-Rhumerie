import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className="bg-black text-white p-4">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
               <span className="text-3xl font-bold">La Rhumerie</span>
               <span className="text-purple-500 text-3xl font-bold mr-2">.</span>
            </div>

            <div className="hidden md:flex space-x-4">
               <Link to="/home" className="hover:text-gray-400">Accueil</Link>
               <Link to="/about" className="hover:text-gray-400">A propos</Link>
               <Link to="/menu" className="hover:text-gray-400">Menu</Link>
               <Link to="/events" className="hover:text-gray-400">Événements</Link>
               <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </div>

            <div className="md:hidden">
               <button onClick={toggleMenu} className="text-white focus:outline-none">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
               </button>
            </div>
         </div>

         {/* Menu déroulant pour les appareils mobiles */}
         <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-opacity duration-700 ease-in-out`}>
            <div className="flex flex-col space-y-4 mt-4">
               <Link to="/home" className={`hover:text-gray-400 transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100 delay-300' : 'opacity-0 delay-100'}`}>Accueil</Link>
               <Link to="/about" className={`hover:text-gray-400 transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100 delay-400' : 'opacity-0 delay-200'}`}>A propos</Link>
               <Link to="/menu" className={`hover:text-gray-400 transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100 delay-500' : 'opacity-0 delay-300'}`}>Menu</Link>
               <Link to="/portfolio" className={`hover:text-gray-400 transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100 delay-600' : 'opacity-0 delay-400'}`}>Portfolio</Link>
               <Link to="/events" className={`hover:text-gray-400 transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100 delay-700' : 'opacity-0 delay-500'}`}>Événements</Link>
               <Link to="/contact" className={`hover:text-gray-400 transition-opacity duration-700 ease-out ${isOpen ? 'opacity-100 delay-800' : 'opacity-0 delay-600'}`}>Contact</Link>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
