//Loterie.jsx

import React, { useState } from 'react';
import '../Components/Loterie.css';

const Loterie = () => {
   const [balls, setBalls] = useState([...Array(100).keys()].map(n => n + 1));
   const [selectedBall, setSelectedBall] = useState(null);
   const [isSpinning, setIsSpinning] = useState(false);
   const [drawCount, setDrawCount] = useState(0);

   const spinBalls = () => {
      setIsSpinning(true);
      setSelectedBall(null);
      const interval = setInterval(() => {
         setBalls(prevBalls => {
         const newBalls = [...prevBalls];
         newBalls.sort(() => Math.random() - 0.5);
         return newBalls;
         });
      }, 100);

      setTimeout(() => {
         clearInterval(interval);
         if ((drawCount + 1) % 5 === 0) {
            setSelectedBall(5); // Chaque cinquième tirage est toujours 5
         } else {
            setSelectedBall(balls[Math.floor(Math.random() * balls.length)]);
         }
         setIsSpinning(false);
         setDrawCount(prevCount => prevCount + 1);
      }, 3000);
   };

   return (
      <div className="lottery-game">
         <div className="balls-container">
            {balls.map(ball => (
               <div key={ball} className={`ball ${selectedBall === ball ? 'selected' : ''}`} 
               style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: selectedBall === ball ? 'orange' : 'lightgray',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '5px',
                  fontSize:'1.2em',
                  color:'black',
               }}>
                  {ball}
               </div>
            ))}
            
         </div>
         <button onClick={spinBalls} disabled={isSpinning} className="spin-button">
            {isSpinning ? 'Tirage en cours...' : 'Tirer une boule'}
         </button>
         {selectedBall !== null && <div className="result">Boule tirée : {selectedBall}</div>}
      </div>
   );
};
export default Loterie;