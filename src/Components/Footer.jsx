import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} className="bg-black text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-xl font-oswald mb-4">Heures d'ouverture</h2>
          <ul>
            <li>Lundi - Vendredi : 18:00 - 02:00</li>
            <li>Samedi : 20:00 - 04:00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>
        
        {/* Colonne des derniers posts */}
        <div>
          <h2 className="text-xl font-oswald mb-4">Derniers posts</h2>
          <ul>
            <li><a href="#" className="text-purple-500">Post 1</a></li>
            <li><a href="#" className="text-purple-500">Post 2</a></li>
            <li><a href="#" className="text-purple-500">Post 3</a></li>
          </ul>
        </div>
        
        {/* Colonne des contacts */}
        <div>
          <h2 className="text-xl font-oswald mb-4">Contact</h2>
          <ul>
            <li>Adresse: 123 Rue de la Musique</li>
            <li>Téléphone: +123 456 789</li>
            <li>Email: info@LaRhumerie.com</li>
          </ul>
        </div>
        
        {/* Colonne des réseaux sociaux */}
        <div>
          <h2 className="text-xl font-oswald mb-4">Suivez-nous</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-purple-500">Facebook</a>
            <a href="#" className="text-purple-500">Twitter</a>
            <a href="#" className="text-purple-500">Instagram</a>
          </div>
        </div>
      </div>
      
      {/* Barre inférieure */}
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-oswald">LaRhumerie</div>
          <div className="text-sm">&copy; 2024 LaRhumerie. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
