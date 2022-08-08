import PropTypes from 'prop-types';
import css from './LoadMore.module.css';
const LoadMoreButton = ({ LoadMore }) => {
  return (
    <button type="button" onClick={LoadMore} className={css.Button}>
      Load more
    </button>
  );
};
LoadMoreButton.propTypes = {
  LoadMore: PropTypes.func,
};
export default LoadMoreButton;
