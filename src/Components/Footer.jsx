import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      {/* Ligne blanche entre les détails et le footer */}
      <div className="border-t border-white mx-4 my-8"></div>
      
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div >
          <h2 className="text-3xl font-oswald mb-10">Heures d'ouverture</h2>
          <ul>
            <li className="text-xl mb-5">Lundi_..........................................._<span className='text-purple-500'>CLOSE</span></li>
            <li className="text-xl mb-5">Mardi_..........................................._<span className='text-purple-500'>CLOSE</span></li>
            <li className="text-xl mb-5">Mercredi_......................_17:00 - 01:00</li>
            <li className="text-xl mb-5">Jeudi_............................._17:00 - 01:00</li>
            <li className="text-xl mb-5">Vendredi_......................_17:00 - 03:00</li>
            <li className="text-xl mb-5">Samedi_........................._17:00 - 03:00</li>
            <li className="text-xl mb-5">Dimanche_..................._<span className='text-purple-500'>CLOSE / EVENT</span></li>
          </ul>
        </div>
        
        {/* Colonne des derniers posts */}
        <div>
          <h2 className="text-3xl font-oswald mb-10">Derniers posts</h2>
          <div className='flex flex-col'>
            <Link to="/evenement" className='text-start mb-5'>
              <h1 className="text-xl">After - Work</h1>
              <p className="text-purple-500 text-xl ms-4">After work, Happy hour. Tous les Mercredis</p>
            </Link>
            <Link to="/evenement" className='text-start mb-5'>
              <h1 className="text-xl">Classic Friday</h1>
              <p className="text-purple-500 text-xl ms-4">Une Soirée Inoubliable Chaque Vendredi !</p>
            </Link>
            <Link to="/evenement" className='text-start mb-5'>
              <h1 className="text-xl">Spit it UP</h1>
              <p className="text-purple-500 text-xl ms-4">Concept de soirée pour jeune talent, Tous les Samedis</p>
            </Link>
          </div>
        </div>
        
        {/* Colonne des contacts */}
        <div id="contact">
          <h2 className="text-3xl font-oswald mb-10">Contact</h2>
          <ul>
            <li className="text-xl mb-5"><Link to="https://maps.app.goo.gl/8aAj1h5w525otG9t6">Adresse:  <span className='text-purple-500'>Rue du 27 décembre</span></Link></li>
            <li className="text-xl mb-5">Téléphone:  +225 0711620210</li>
            <li className="text-xl mb-5">Téléphone:  +225 0172776363</li>
            <li className="text-xl mb-5"><Link to="mailto:contact@larhumerie.ci">Email:  <span className='text-purple-500'>contact@larhumerie.ci</span></Link></li>
          </ul>
        </div>
        
        {/* Colonne des réseaux sociaux */}
        <div>
          <h2 className="text-3xl font-oswald mb-10">Suivez-nous</h2>

          <div>
            <Link to="https://www.facebook.com/profile.php?id=100095418309636" className={`text-purple-500 text-xl flex mb-5`}>
                <div className="bg-white w-7 h-7 rounded-full p-0.5 hover:bg-purple-500 mr-2">
                  <img 
                    src="/Icones/facebook.png"
                    alt="LogoFacebook" />
                </div>
                Facebook
            </Link>

            <Link to="https://www.instagram.com/larhumerie.z4?igsh=OTdjMXBwNjQwdDdi" className={`text-purple-500 text-xl flex mb-5`}>
                <div className="bg-white w-7 h-7 rounded-full p-0.5 hover:bg-purple-500 mr-2">
                  <img 
                    src="/Icones/instagram.png"
                    alt="LogoInstagram" />
                </div>
                Instagram
            </Link>
          </div>
        </div>
      </div>
      
      {/* Barre inférieure */}
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-oswald">La Rhumerie 
            <span className="text-purple-500 text-4xl font-bold ml-0.5">.</span>
          </div>
          <div
            className="text-lg text-center">
              &copy; 2024 LaRhumerie. Site developer by  
                <Link 
                  className='ms-1 text-purple-500'
                  to="https://www.instagram.com/sek.y_ben?igsh=MTBnN3hybnp1eGpnbw==">
                    Ben
                </Link> & 
                <Link 
                  className='ms-1 text-purple-500'
                  to="https://www.instagram.com/b.andysa?igsh=ZDNlZDc0MzIxNw">
                    Andy
                </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
