import { useState } from 'react';
import projets from '../data/projets.json';
import separateur from '../assets/separateur.png';

const Quetes = () => {
    const [modalOpen, setModalOpen] = useState(0);

    const handleItemClick = (index) => {
        setModalOpen(index);
    };

    return (
        <div className="quetes-container">
            <div className="quetes-liste">
                <p>QUETES</p>
                <img src={separateur} alt="separateur" className="separateur" />
                <ul>
                    {projets.map((projet, index) => (
                        <li key={index} onClick={() => handleItemClick(index)}>
                            {projet.titre}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="quetes-contenu">
                <p> <span>Titre:</span> {projets[modalOpen].titre} </p>
                <p> <span>Description:</span> {projets[modalOpen].description} </p>
                <p> <span>Problématique:</span> {projets[modalOpen].problematique} </p>
                <p> <span>Compétences:</span> {projets[modalOpen].competence} </p>
                <p> <span>Techno utilisées:</span> {projets[modalOpen].techno} </p>
                <p> <span>Lien du projet:</span><a href={projets[modalOpen].lien} target="_blank">ICI</a> </p>
                <p> <span>Screenshots:</span> </p>
                <div className="quetes-images">
                    {projets[modalOpen].images && projets[modalOpen].images.map && projets[modalOpen].images.map((lien, index) => (
                        <img key={index} src={lien} alt={projets[modalOpen].titre} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Quetes;
