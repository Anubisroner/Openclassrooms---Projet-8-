import React, { useState } from 'react';
import Separateur from '../assets/separateur-menu.png';

function Accueil() {
  const [herosSelected, setHerosSelected] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  const handleClick = () => {
    setShowLoading(true);
    moveProgressBar();
    setTimeout(() => {
      setHerosSelected(true);
    }, 3000);
  };

  const moveProgressBar = () => {
    let width = progressWidth;
    const id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        setProgressWidth(width);
      }
    }, 30);
  };

  return (
    <div>
      <div className={`accueil ${herosSelected ? 'accueil-hidden' : ''}`}>
        <div className="accueil-container">
          <h1>PERSONNAGE</h1>
          <img src={Separateur} alt="Separateur" className="separateur" />
          <p className="heros" onClick={handleClick}><span>→ </span>Farid Machrouh<span> ←</span></p>
          <p>____________</p>
          <p>____________</p>
          <p>____________</p>
        </div>
        {showLoading && (
          <div className="chargement">
            <div className="progress-container">
              <div className="progress" style={{ width: `${progressWidth}%` }}>
                <div className="progress-text">
                  {progressWidth}%
                </div>
              </div>
            </div>
                  <p>Connexion...</p>
          </div>
        )}
      </div>
    </div >
  );
}

export default Accueil;
