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
               <img src="/Logo/Logo-rhum.png" alt="Logo" />
            </div>

            <div className='mt-10'>
               <p className="mb-4 text-center">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. La Rhumerie.</p>
            </div>

            <div className="flex space-x-7 items-center justify-center mt-10">
               <a href="https://www.facebook.com" className="bg-white rounded-full p-2 hover:bg-orange-500">
                  <i className="arrow-down-circle"></i>
               </a>
               <a href="https://www.twitter.com" className="bg-white rounded-full p-2 hover:bg-orange-500">
                  <i className="arrow-down-circle"></i>
               </a>
               <a href="https://www.instagram.com" className="bg-white rounded-full p-2 hover:bg-orange-500">
                  <i className="arrow-down-circle"></i>
               </a>
               <a href="https://www.tiktok.com" className="bg-white rounded-full p-2 hover:bg-orange-500">
                  <i className="arrow-down-circle"></i>
               </a>
               <a href="mailto:example@gmail.com" className="bg-white rounded-full p-2 hover:bg-orange-500">
                  <i className="arrow-down-circle"></i>
               </a>
            </div>
         </div>
      </div>
   );
};

export default MiniPage;
