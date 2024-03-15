import Modal from 'react-modal';
import separateur from '../assets/separateur.png';

const CustomModal = ({ isOpen, onClose, title, content, id }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="Modal"
      overlayClassName="Overlay"
      id={id}
      appElement={document.getElementById("root")}>
      <div className="modal-header">
        <h1>{title}</h1>
        <img src={separateur} alt="separateur" className="separateur" />
        <button className="closeButton" onClick={onClose}>X</button>
      </div>
      <div className="modal-content">{content}</div>
    </Modal >
  );
}

export default CustomModal;
