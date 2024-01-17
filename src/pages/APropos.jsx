import { Banner } from '../components/Banner';
import Collapse from '../components/Collapse';
import '../styles/__Style.scss';

function APropos() {
  return (
    <div className="App">
      <Banner
        className="banner-about-container"
      />
      <div className="about-container">
        <div className="collapse-container">
          <Collapse
            titre="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Collapse
            titre="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            titre="Service"
            content="Chez Kasa, nous nous engageons à fournir un service exceptionnel à nos clients. Notre équipe dévouée est disponible 24/7 pour répondre à vos besoins et vous offrir une expérience de location de qualité. Nous sommes là pour vous aider à trouver le logement parfait pour votre séjour et pour vous assurer un séjour agréable et sans souci."
          />
          <Collapse
            titre="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logements correspond aux critère établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
    </div>

  );
}

export default APropos;
