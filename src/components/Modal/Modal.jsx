import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalContent } from './Modal.styled';


export const Modal = ({ largeImageURL, alt, onCloseModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <img src={largeImageURL} alt={alt} />
      </ModalContent>
    </Overlay>
  );
};


Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
};