import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Json from '../data/logements.json';
import '../styles/__Style.scss';

function LogementID() {
    const [logement, setLogement] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const logement = Json.find((logement) => "/" + logement.id === location.pathname);
        setLogement(logement);
    }, []);

    return (
        <div className="logement-container">
            {logement ? (
                <div className="logement-details">
                    <img src={logement.pictures[0]} alt={logement.title} className="logement-image" />

                    <div className="bloc-container">
                        <div className="logement-bloc1">
                            <h1>{logement.title}</h1>
                            <p className="logement-location">{logement.location}</p>
                            <ul className="logement-tags">
                                {logement.tags.map((tag, index) => (
                                    <li key={index}>{tag}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="container-bloc2">
                            <div className="logement-bloc2">
                                <p className="logement-name">{logement.host.name}</p>
                                <img src={logement.host.picture} alt={logement.host.name} className="logement-image-proprio"/>
                            </div>
                            <p className="logement-rating">{logement.rating} étoiles sur 5</p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Logement introuvable</p>
            )}
        </div>
    );
}

export default LogementID;
