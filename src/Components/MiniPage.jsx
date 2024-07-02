import React from 'react';

const MiniPage = ({ toggleMiniPage }) => {
   return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
         <div className="relative w-1/3 h-full bg-black text-white p-10 transform transition-transform duration-500 ease-in-out translate-x-0">

            <button onClick={toggleMiniPage} className="text-white focus:outline-none absolute top-4 right-4">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
               </svg>
            </button>

            <div>
               <img src="/Logo/Logo-Rhum.png" alt="Logo" />
            </div>

            <div className='mt-10'>
               <p className="mb-4 text-center text-2xl">Bienvenue à la Rhumerie, où chaque visite est une célebration des sens et un voyage a travers les arômes enivrants des meilleures rhum du monde. Nichée au coeur de notre belle ville d'abidjan, La Rhumerie n'est pas seulement un bar; c'est un sanctuaire pour les amateurs de rhum, les épicuriens et ceux en quête d'une experience unique.</p>
            </div>

            <div className="flex space-x-7 items-center justify-center mt-10">
            <div href="#" className="bg-white rounded-full p-1 w-8 h-8"></div>
               <a href="https://www.facebook.com/profile.php?id=100095418309636" className="bg-white w-8 h-8 rounded-full p-0.5 hover:bg-orange-500">
                  <img src="/Icones/facebook.png" alt="LogoFacebook" />
               </a>
               <a href="https://www.instagram.com/larhumerie.z4?igsh=OTdjMXBwNjQwdDdi" className="bg-white w-8 h-8 rounded-full p-0.5 hover:bg-orange-500">
                  <img src="/Icones/instagram.png" alt="LogoInstagram" />
               </a>
               <a href="mailto:contact@larhumerie.ci" className="bg-white w-8 h-8 rounded-full p-0.5 hover:bg-orange-500">
                  <img src="/Icones/gmail.png" alt="LogoGmail" />
               </a>
               <div href="#" className="bg-white rounded-full p-1 w-8 h-8"></div>
            </div>
         </div>
      </div>
   );
};

export default MiniPage;
