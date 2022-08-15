import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import LoadMoreButton from 'components/loadMore/LoadmoreButton';
import Loader from './Loader';
import getImages from '../../services/APIwork';
import css from './ImageGallery.module.css';
function ImageGallery({ foundImg, showModal, getImg }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('rest');
  const [error, setError] = useState('');

  useEffect(() => {
    if (foundImg) {
      setImages([]);
      setPage(1);
    }
  }, [foundImg]);

  useEffect(() => {
    if (foundImg) {
      setStatus('loading');
      getImages(foundImg, page)
        .then(images => {
          setImages(prevState => [...prevState, ...images.hits]);
          setStatus('success');
        })
        .catch(error => {
          setError(error);
          setStatus('error');
        });
    }
  }, [page, foundImg]);

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
    //console.log('завантажуємо');
  };
  if (status === 'error') {
    return <h1>{error.message}</h1>;
  }
  return (
    <div>
      <ul className={css.ImageGallery}>
        {images.map(img => {
          return (
            <ImageGalleryItem
              src={img.webformatURL}
              alt={img.tags}
              key={img.id}
              modalImg={img.largeImageURL}
              showModal={showModal}
              getImg={getImg}
            />
          );
        })}
      </ul>
      {status === 'loading' && <Loader />}
      {images.length !== 0 && status === 'success' && (
        <LoadMoreButton LoadMore={onLoadMoreClick} />
      )}
    </div>
  );
}
ImageGallery.propTypes = {
  foundImg: PropTypes.string,
  showModal: PropTypes.func,
  getImg: PropTypes.func,
};
export default ImageGallery;
