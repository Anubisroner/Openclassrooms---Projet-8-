import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from '../pages/Accueil';
import APropos from '../pages/APropos';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Error from '../pages/Error';
import CardLogements from '../components/CardLogements';
import LogementsID from '../components/LogementID';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<>
                    <Accueil />
                    <CardLogements />
                </>} />
                <Route path="/APropos" element={<APropos />} />
                <Route path="/:logementsId" element={<LogementsID/>} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App
