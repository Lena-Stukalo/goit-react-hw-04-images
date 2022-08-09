import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import LoadMoreButton from 'components/loadMore/LoadmoreButton';
import Loader from './Loader';
import getImages from 'components/services/APIwork';
import css from './ImageGallery.module.css';
class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: 'rest',
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.foundImg !== this.props.foundImg) {
      this.setState({ page: 1, images: [] });
    }
    if (
      prevProps.foundImg !== this.props.foundImg ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'loading' });
      getImages(this.props.foundImg, this.state.page)
        .then(images =>
          this.setState(prevState => {
            const newArray = [...prevState.images, ...images.hits];
            return {
              images: newArray,
              status: 'success',
            };
          })
        )
        .catch(error => this.setState({ error, status: 'error' }));
    }
  }

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { status, error, images } = this.state;
    if (status === 'error') {
      return <h1>{error.message}</h1>;
    }
    return (
      <div>
        <ul className={css.ImageGallery}>
          {this.state.images.map(img => {
            return (
              <ImageGalleryItem
                src={img.webformatURL}
                alt={img.tags}
                key={img.id}
                modalImg={img.largeImageURL}
                showModal={this.props.showModal}
                getImg={this.props.getImg}
              />
            );
          })}
        </ul>
        {status === 'loading' && <Loader />}
        {images.length !== 0 && status === 'success' && (
          <LoadMoreButton LoadMore={this.onLoadMoreClick} />
        )}
      </div>
    );
  }
}
ImageGallery.propTypes = {
  foundImg: PropTypes.string,
  showModal: PropTypes.func,
  getImg: PropTypes.func,
};
export default ImageGallery;
