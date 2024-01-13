import etoileActive from "../assets/star-active.png";

function Rating({ rating }) {
  const etoiles = Array.from({ length: 5 }, (_, index) => (
    <img
      className={`star ${index + 1 <= rating ? '' : 'star-inactive'}`}
      src={etoileActive}
      key={index + 1}
      alt={index + 1 <= rating ? 'etoile active' : 'etoile inactive'}
    />
  ));

  return <div className="rating">{etoiles}</div>;
}

export default Rating;
