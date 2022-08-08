import { Audio } from 'react-loader-spinner';
import css from './ImageGallery.module.css';
const Loader = () => {
  return (
    <div className={css.Loader}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        className={css.loader}
      />
    </div>
  );
};
export default Loader;
