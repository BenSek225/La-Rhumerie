import React, { useState } from 'react';

const EventCard = ({ image, date, everytime, name, time }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDetails = () => {
      setIsOpen(!isOpen);  //Affichage sur télephone
   };

   const [day, month, year] = date.split(' '); //Pour diviser les élements de la date et pouvoir s'en servir seul

   return (
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-64">
         
         {/* Affichage de L'image des Evenements */}
         <div className="relative md:w-2/5">
            <img 
               src={image} 
               alt={name} 
               className="w-full h-50 md:h-full object-cover cursor-pointer"
               onClick={toggleDetails}
            />

            {/* Affichage de la description pour les petit ecrans */}
            <div 
               className={`absolute inset-0 bg-orange-500 p-4 text-white flex flex-col justify-between transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 md:hidden cursor-pointer`}
               onClick={toggleDetails}
            >
               <div className="flex justify-between items-center">
                  {/* Le jour, si c'est un evenement avec date */}
                  <div className="text-6xl font-bold leading-none">{day}</div>

                  {/* Le Jour pour si c'est un evenement a date fixe */}
                  <div className='text-3xl'>{everytime}</div>

                  {/* Le mois et l'annee, si c'est un evenement avec date */}
                  <div className="flex flex-col">
                     <div className="text-lg font-bold uppercase">{month}</div>
                     <div className="text-sm">{year}</div>
                  </div>
               </div>

               {/* Le nom et l'heure de l'evenement */}
               <div className="mt-2">
                  <div className="text-2xl font-bold">{name}</div>
                  <div className="text-gray-200">{time}</div>
               </div>
            </div>
         </div>

         {/* Affichage de la description pour les grands ecrans */}
         <div className="hidden md:flex md:flex-grow p-4 text-white flex flex-col justify-between bg-orange-500">
            <div className="flex justify-between items-center">
               {/* Le jour, si c'est un evenement avec date */}
               <div className="text-6xl font-bold leading-none">{day}</div>

               {/* Le Jour pour si c'est un evenement a date fixe */}
               <div className='text-5xl'>{everytime}</div>

               {/* Le mois et l'annee, si c'est un evenement avec date */}
               <div className="flex flex-col">
                  <div className="text-2xl font-bold uppercase">{month}</div>
                  <div className="text-2lg">{year}</div>
               </div>
            </div>

            {/* Le nom et l'heure de l'evenement */}
            <div className="mt-2">
               <div className="text-4xl font-bold">{name}</div>
               <div className="text-gray-200 text-2xl">{time}</div>
            </div>
         </div>
      </div>
   );
};

const Events = () => {
   const eventList = [  //Liste de tous les Evenements
      {
         image: "/Image/EventImage/RHUMERIE-1.jpg",  // Image descriptive
         date: "", // Pour la date des Evenement a venir (False)
         everytime: "Tous Les Mercredis",  // Pous tous les Evenements a date fixe (True)
         name: "After work, Happy hour Event",  // Nom de l'evenement
         time: "17:00 - 01:00" // L'heure des Evenements
      },
      {
         image: "/Image/EventImage/RHUMERIE-2.jpg",  // Image descriptive
         date: "", // Pour la date des Evenement a venir (False)
         everytime: "Tous Les Vendredis", // Pous tous les Evenements a date fixe (True)
         name: "Classic Friday Event",  // Nom de l'evenement
         time: "17:00 - 03:00" // L'heure des Evenements
      },
      {
         image: "/Image/EventImage/RHUMERIE-3.jpg",  // Image descriptive
         date: "", // Pour la date des Evenement a venir (False)
         everytime: "Tous Les Samedis", // Pous tous les Evenements a date fixe (True)
         name: "Spit it UP Event",  // Nom de l'evenement
         time: "17:00 - 03:00" // L'heure des Evenements
      },
      {
         image: "/Image/EventImage/RHUMERIE-4.jpg",  // Image descriptive
         date: "30 Juillet 2024", // Pour la date des Evenement a venir (True)
         everytime: "", // Pous tous les Evenements a date fixe (False)
         name: "Music Night Event",  // Nom de l'evenement
         time: "18:00 - 02:00" // L'heure des Evenements
      },
      {
         image: "/Image/EventImage/RHUMERIE-5.jpg",  // Image descriptive
         date: "30 Juillet 2024", // Pour la date des Evenement a venir (True)
         everytime: "", // Pous tous les Evenements a date fixe (False)
         name: "Music Night Event",  // Nom de l'evenement
         time: "18:00 - 02:00" // L'heure des Evenements
      },
   ];

   return (
      <div className="container bg-black mx-auto mt-16 p-4">
         <h1 className="text-3xl text-white font-bold mb-4 text-right">UPCOMING EVENTS <span className="text-4xl text-purple-500">.</span></h1>
         <div className="grid grid-cols-1 gap-6">
         {eventList.map((event, index) => (
            <EventCard key={index} {...event} /> //Tirer de la liste du dessus
         ))}
         </div>
      </div>
   );
};

export default Events;