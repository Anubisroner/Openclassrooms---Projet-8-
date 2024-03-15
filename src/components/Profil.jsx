import { useState, useEffect } from 'react';
import Portrait from '../assets/portrait.png'; 

const Profil = () => {
    const [lines, setLines] = useState([]);
    const txt = `Bonjour et bienvenue à toi étranger !
Je suis Farid Machrouh, un passionné de jeux vidéo et d'informatique.
Ancien agent de sécurité, j'ai décidé de concrétiser ma passion pour le développement web.
Après avoir longtemps envisagé cette transition, j'ai finalement sauté le pas en suivant une formation chez OpenClassrooms.
À travers mes projets, je mets en pratique mes compétences acquises et je suis toujours avide d'apprendre et de relever de nouveaux défis dans le monde du développement web.`;
    const speed = 15; 

    useEffect(() => {
        let i = 0;
        let linesArray = [];
        const typeWriter = () => {
            if (i <= txt.length) {
                const line = txt.substring(0, i);
                linesArray = line.split('\n').map((line, index) => <div key={index}>{line}</div>);
                setLines(linesArray);
                i++;
                setTimeout(typeWriter, speed);
            }
        };

        typeWriter();

        return () => clearTimeout();
    }, []); 

    return (
        <div className="profil-container">
            <img src={Portrait} alt="Portrait" />
            <div className="profil-texte" >{lines}</div>
        </div>
    );
}

export default Profil;
