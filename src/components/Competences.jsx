import LogoHtml from '../assets/techno/logo_html.jpg';
import LogoCss from '../assets/techno/logo_css.jpg';
import LogoSass from '../assets/techno/logo_sass.jpg';
import LogoReact from '../assets/techno/logo_react.jpg';
import LogoMangodb from '../assets/techno/logo_mangodb.jpg';
import LogoJavascript from '../assets/techno/logo_javascript.jpg';

const Competences = () => {
    return (
        <div className="competences-container">
            <section>
            <img src={LogoHtml} alt="Logo Html" />
            <p>HTML</p>
            </section>

            <section>
            <img src={LogoCss} alt="Logo CSS" />
            <p>CSS</p>
            </section>

            <section>
            <img src={LogoSass} alt="Logo Sass" />
            <p>SASS</p>
            </section>

            <section>
            <img src={LogoJavascript} alt="Logo Javascript" />
            <p>Javascript</p>
            </section>

            <section>
            <img src={LogoReact} alt="Logo React" />
            <p>React</p>
            </section>

            <section>
            <img src={LogoMangodb} alt="Logo MangoDB" />
            <p>MangoDB</p>
            </section>
        </div>
    );
}

export default Competences;
