import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
function Modal({ src, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', hendleKeyDown);
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
  });

  const hendleKeyDown = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };
  const hendleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={hendleBackDropClick}>
      <div className={css.Modal}>
        <img src={src} alt="" />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  src: PropTypes.string,
  toggleModal: PropTypes.func,
};
export default Modal;
