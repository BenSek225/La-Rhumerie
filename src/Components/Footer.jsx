import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div >
          <h2 className="text-3xl font-oswald mb-10">Heures d'ouverture</h2>
          <ul>
            <li className="text-xl mb-5">Lundi_..........................................._<span className='text-purple-500'>FERMÈ</span></li>
            <li className="text-xl mb-5">Mardi_..........................._18:00 - 02:00</li>
            <li className="text-xl mb-5">Mercredi_......................_18:00 - 02:00</li>
            <li className="text-xl mb-5">Jeudi_............................._18:00 - 02:00</li>
            <li className="text-xl mb-5">Vendredi_......................_18:00 - 02:00</li>
            <li className="text-xl mb-5">Samedi_........................._20:00 - 04:00</li>
            <li className="text-xl mb-5">Dimanche_...................._20:00 - 04:00</li>
          </ul>
        </div>
        
        {/* Colonne des derniers posts */}
        <div>
          <h2 className="text-3xl font-oswald mb-10">Derniers posts</h2>
          <div className='flex flex-col'>
            <Link to="#" className='text-start mb-5'>
              <h1 className="text-xl">Lundi des star</h1>
              <p className="text-purple-500 text-xl ms-4">post1</p>
            </Link>
            <Link to="#" className='text-start mb-5'>
              <h1 className="text-xl">Dimanche la rhum coule a flow</h1>
              <p className="text-purple-500 text-xl ms-4">post2</p>
            </Link>
            <Link to="#" className='text-start mb-5'>
              <h1 className="text-xl">Coming soon event</h1>
              <p className="text-purple-500 text-xl ms-4">post3</p>
            </Link>
          </div>
        </div>
        
        {/* Colonne des contacts */}
        <div>
          <h2 className="text-3xl font-oswald mb-10">Contact</h2>
          <ul>
          <li className="text-xl mb-5">Adresse: 123 Rue de la Musique</li>
            <li className="text-xl mb-5">Téléphone: +123 456 789</li>
            <li className="text-xl mb-5">Email: info@LaRhumerie.com</li>
          </ul>
        </div>
        
        {/* Colonne des réseaux sociaux */}
        <div>
          <h2 className="text-3xl font-oswald mb-10">Suivez-nous</h2>
          <div className="flex space-x-4">
            <Link to="#" className={`text-purple-500 text-xl`}>Facebook</Link>
            <Link to="#" className={`text-purple-500 text-xl`}>Twitter</Link>
            <Link to="#" className={`text-purple-500 text-xl`}>Instagram</Link>
          </div>
        </div>
      </div>
      
      {/* Barre inférieure */}
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-oswald">La Rhumerie</div>
          <div className="text-lg">&copy; 2024 LaRhumerie. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;