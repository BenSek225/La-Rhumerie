import React, { useState } from 'react';

const EventCard = ({ image, date, name, time }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDetails = () => {
      setIsOpen(!isOpen);
   };

   const [day, month, year] = date.split(' ');

   return (
      <div className="relative bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row h-auto md:h-64">
         <div className="relative md:w-1/3">
         <img 
            src={image} 
            alt={name} 
            className="w-full h-48 md:h-full object-cover cursor-pointer"
            onClick={toggleDetails} 
         />
         <div 
            className={`absolute inset-0 bg-orange-500 p-4 text-white flex flex-col justify-between transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 md:hidden cursor-pointer`}
            onClick={toggleDetails}
         >
            <div className="flex justify-between items-center">
               <div className="text-6xl font-bold leading-none">{day}</div>
               <div className="flex flex-col">
               <div className="text-lg font-bold uppercase">{month}</div>
               <div className="text-sm">{year}</div>
               </div>
            </div>
            <div className="mt-2">
               <div className="text-2xl font-bold">{name}</div>
               <div className="text-gray-200">{time}</div>
            </div>
         </div>
         </div>
         <div className="hidden md:flex md:flex-grow p-4 text-white flex flex-col justify-between bg-orange-500">
         <div className="flex justify-between items-center">
            <div className="text-6xl font-bold leading-none">{day}</div>
            <div className="flex flex-col">
               <div className="text-lg font-bold uppercase">{month}</div>
               <div className="text-sm">{year}</div>
            </div>
         </div>
         <div className="mt-2">
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-gray-200">{time}</div>
         </div>
         </div>
      </div>
   );
};

const Events = () => {
   const eventList = [
      {
         image: "/Image/img-1.jpg",
         date: "24 Juin 2024",
         name: "Summer Festival",
         time: "18:00 - 23:00"
      },
      {
         image: "/Image/img-2.jpg",
         date: "30 Juin 2024",
         name: "Music Night",
         time: "20:00 - 01:00"
      },
      {
         image: "/Image/img-3.jpg",
         date: "30 Juin 2024",
         name: "Music Night",
         time: "20:00 - 01:00"
      },
      {
         image: "/Image/img-4.jpg",
         date: "30 Juin 2024",
         name: "Music Night",
         time: "20:00 - 01:00"
      },
      {
         image: "/Image/img-5.jpg",
         date: "30 Juin 2024",
         name: "Music Night",
         time: "20:00 - 01:00"
      },
      {
         image: "/Image/img-6.jpg",
         date: "24 Juin 2024",
         name: "Summer Festival",
         time: "18:00 - 23:00"
      },
   ];

   return (
      <div className="container bg-black mx-auto mt-16 p-4">
         <h1 className="text-3xl text-white font-bold mb-4 text-right">UPCOMING EVENTS<span className="text-purple-500">.</span></h1>
         <div className="grid grid-cols-1 gap-6">
         {eventList.map((event, index) => (
            <EventCard key={index} {...event} />
         ))}
         </div>
      </div>
   );
};

export default Events;