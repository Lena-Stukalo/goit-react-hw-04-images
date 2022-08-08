import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  hendleBackDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };
  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.hendleBackDropClick}>
        <div className={css.Modal}>
          <img src={this.props.src} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  src: PropTypes.string,
  toggleModal: PropTypes.func,
};
export default Modal;
