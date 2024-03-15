import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Accueil from '../pages/Accueil';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import Avatar from '../components/Avatar';
import PanneauLateral from '../components/PanneauLateral';
import '../styles/__Styles.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalId, setModalId] = useState("");

  const openModal = (title, content, id) => {
    setModalTitle(title);
    setModalContent(content);
    setModalId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Helmet>
        <title>Portfolio: Machrouh Farid</title>
        <meta name="description" content="Portfolio de Machrouh Farid, dev web junior." />
      </Helmet>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </div>
      <Avatar />
      <PanneauLateral openModal={openModal} />
      <Header openModal={openModal} />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        content={modalContent}
        id={modalId}
      />
      <Footer />
    </Router>
  )
}

export default App;
