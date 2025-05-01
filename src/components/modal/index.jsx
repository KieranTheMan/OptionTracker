import React, {useEffect, useState} from 'react';
import { Modal, Button } from "react-bootstrap";

export const TradeModal = ({isOpen, onClose}) => { 
    const [showModal, setShowModal] = useState(false);
    
 // Sync local state with global trigger
 useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);
  
return (
    <Modal show={showModal} onHide={onClose} centered fullscreen >
      <Modal.Header closeButton>
        <Modal.Title>Trade Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>This modal is centered and global!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export const PortfolioModal = ({isOpen, onClose}) => { 
    const [showModal, setShowModal] = useState(false);
    
 // Sync local state with global trigger
 useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

{/* Modal rendered at app level */}
return (
    <Modal show={showModal} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Global Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>This modal is centered and global!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
