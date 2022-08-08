import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({ src, alt, modalImg, showModal, getImg }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => {
        showModal();
        getImg(modalImg);
      }}
    >
      <img src={src} alt={alt} className={css.ImageGalleryItemImage} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  modalImg: PropTypes.string,
  showModal: PropTypes.func,
  getImg: PropTypes.func,
};

export default ImageGalleryItem;
