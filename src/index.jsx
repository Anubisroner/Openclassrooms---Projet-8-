import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './pages/App';
import APropos from './pages/APropos';
import Logement from './pages/Logement'
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
