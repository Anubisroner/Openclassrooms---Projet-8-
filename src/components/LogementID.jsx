import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Json from '../data/logements.json';
import Collapse from './Collapse';
import Rating from './Rating';
import Error from '../pages/Error';
import Carousel from './Carousel';
import '../styles/__Style.scss';


function LogementID() {
    const [logement, setLogement] = useState(null);
    const location = useLocation();
    const [rating, setRating] = useState(0);

    useEffect(() => {
        const logement = Json.find((logement) => "/" + logement.id === location.pathname);
        setLogement(logement);
    }, []);

    useEffect(() => {
        if (logement) {
            const note = Number(logement.rating);
            setRating(note);
        }
    }, [logement]);

    return (
        <div className="logement-container">
            {logement ? (
                <div className="logement-details">
                    <Carousel logement={logement} />

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
                                <img src={logement.host.picture} alt={logement.host.name} className="logement-image-proprio" />
                            </div>
                            <div className="rating">
                                <Rating rating={rating} />
                            </div>
                        </div>

                    </div>
                    <div className="collapse-container">
                        <Collapse
                            titre="Description"
                            content={logement.description}
                        />
                        <Collapse
                            titre="Equipements"
                            content={logement.equipments.map((e, index) => (
                                <li key={index}>{e}</li>
                            ))}
                        />
                    </div>
                </div>
            ) : (
                <Error />
            )}
        </div>
    );
}

export default LogementID;