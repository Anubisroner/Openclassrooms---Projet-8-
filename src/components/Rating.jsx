import RatingLogo from '../assets/rate.png';
import '../styles/__Style.scss';


function Rating() {
    return (
        <footer>
            <img src={RatingLogo} alt="RatingLogo" className="RatingLogo" />
        </footer>
    )
}

export default Rating
