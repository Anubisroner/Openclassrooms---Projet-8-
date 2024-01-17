import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fleche from "../assets/vector.png"; 
import '../styles/__Style.scss';


function Carousel({ logement }) {
  const [indexCarousel, setIndexCarousel] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const index = logement.pictures.findIndex((picture) => picture === location.pathname);
    setIndexCarousel(index >= 0 ? index : 0);
  }, [location.pathname, logement.pictures]);

  function previous() {
    setIndexCarousel((prevIndex) => (prevIndex - 1 + logement.pictures.length) % logement.pictures.length);
  }

  function next() {
    setIndexCarousel((prevIndex) => (prevIndex + 1) % logement.pictures.length);
  }

  return (
    <>
      <div className="carousel">
        {logement.pictures.length > 1 && <img onClick={previous} className='fleche fleche-gauche' src={fleche} alt="Flèche gauche" />}
        {logement.pictures.length > 1 && <img onClick={next} className='fleche fleche-droite' src={fleche} alt="Flèche droite" />}
        <img className="carousel-img" src={logement.pictures[indexCarousel]} alt={logement.title} />
        {logement.pictures.length > 1 && <p className='compteur'>{indexCarousel + 1}/{logement.pictures.length}</p>}
      </div>
    </>
  );
}

export default Carousel;
