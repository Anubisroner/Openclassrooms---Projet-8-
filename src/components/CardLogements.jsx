import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Json from '../data/logements.json';
import '../styles/__Style.scss';

function CardLogements() {
  const [logementsData, setLogementsData] = useState(null);

  useEffect(() => {
    setLogementsData(Json)
  }, []);

  return (
    <div className="logements-container">
      {logementsData !== null ? (
        logementsData.map((logement) => (
          <NavLink to={`/${logement.id}`} className="logements-div" key={logement.id}>
            <p>{logement.title}</p>
            <img src={logement.cover} alt={logement.title} />
          </NavLink>
        ))
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default CardLogements;
