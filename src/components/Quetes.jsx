import { useState } from 'react';
import projets from '../data/projets.json';
import separateur from '../assets/separateur.png';
import selecteur from '../assets/selecteur.png';
import soundHover from '../sound/hover.wav';
import soundConfirm from '../sound/confirm.wav';

const Quetes = () => {
    const [modalOpen, setModalOpen] = useState(0);
    const [animation, setAnimation] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleItemClick = (index) => {
        setModalOpen(index);
        setAnimation(true);
        playConfirmSound();

        setTimeout(() => {
            setAnimation(false);
        }, 1000);
    };

    const playHoverSound = () => {
        const audio = new Audio(soundHover);
        audio.volume = 0.3;
        audio.play();
    };

    const playConfirmSound = () => {
        const audio = new Audio(soundConfirm);
        audio.volume = 0.3;
        audio.play();
    };

    // Ajouter un écouteur d'événements pour le clic sur tout le document
    document.addEventListener('click', toggleZoom);

    function toggleZoom(event) {
        const clickedElement = event.target;

        // Vérifier si l'élément cliqué est une image zoomable
        if (clickedElement.classList.contains('animate')) {
            // Récupérer toutes les images zoomables
            const images = document.querySelectorAll('.animate');

            // Si l'image cliquée est déjà zoomée, la désactiver
            if (clickedElement.classList.contains('zoomed')) {
                clickedElement.classList.remove('zoomed');
            } else {
                // Sinon, désactiver toutes les autres images zoomées
                images.forEach(image => {
                    if (image !== clickedElement && image.classList.contains('zoomed')) {
                        image.classList.remove('zoomed');
                    }
                });

                // Activer l'image cliquée
                clickedElement.classList.add('zoomed');
            }
        } else {
            // Si l'élément cliqué n'est pas une image zoomable, désactiver toutes les images zoomées
            const zoomedImages = document.querySelectorAll('.zoomable-image.zoomed');
            zoomedImages.forEach(image => {
                image.classList.remove('.zoomable-image');
            });
        }
    }

    return (
        <div className="quetes-container">
            <div className="quetes-liste">
                <p>QUETES</p>
                <img src={separateur} alt="separateur" className="separateur-quetes" />
                <ul>
                    {projets.map((projet, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(index)}
                            onMouseEnter={() => {
                                setHoveredItem(index);
                                playHoverSound();
                            }}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={modalOpen === index ? "selected" : ""}
                        >
                            <span>{projet.titre}</span>
                            {hoveredItem === index && (
                                <img src={selecteur} alt="selecteur" className="selecteur" />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="quetes-contenu">
                <div className="contenu-quetes">
                    <p className={animation ? "animate" : ""}> <span>Titre:</span> {projets[modalOpen].titre} </p>
                    <p className={animation ? "animate" : ""}> <span>Description:</span> {projets[modalOpen].description} </p>
                    <p className={animation ? "animate" : ""}> <span>Problématique:</span> {projets[modalOpen].problematique} </p>
                    <p className={animation ? "animate" : ""}> <span>Compétences:</span> {projets[modalOpen].competence} </p>
                    <p className={animation ? "animate" : ""}> <span>Techno utilisées:</span> {projets[modalOpen].techno} </p>
                    <p className={animation ? "animate" : ""}> <span>Lien du projet: </span><a href={projets[modalOpen].lien} rel='noreferrer' target="_blank">ICI</a></p>
                    <p className={animation ? "animate" : ""}> <span>Screenshots:</span></p>
                    <div className="quetes-images">
                        {projets[modalOpen].images && projets[modalOpen].images.map && projets[modalOpen].images.map((lien, index) => (
                            <img key={index} src={lien} alt={projets[modalOpen].titre} tabIndex={0} onClick={toggleZoom} className={animation ? "animate " : "animate zoomable-image"} />
                        ))}
                    </div>
                    <p className="quest-complete">Quête validée</p>
                </div>
            </div>
        </div>
    );
}

export default Quetes;
