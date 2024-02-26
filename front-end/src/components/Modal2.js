import React, { useState } from 'react';

const ModalComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('Initial Content');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const changeModalContent = () => {
    setModalContent('New Content');
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Modal Content</h2>
            <p>{modalContent}</p>
            <button onClick={changeModalContent}>
              Change Content
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalComponent;
