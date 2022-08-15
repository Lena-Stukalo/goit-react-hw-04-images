import { useState } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import css from './App.module.css';

export function App() {
  const [value, setValue] = useState('');
  const [showModal, setShowModal] = useState('');
  const [modalImg, setModalImg] = useState('');

  const onFormSubmit = value => {
    setValue(value);
  };
  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };
  const getModalImg = img => {
    setModalImg(img);
  };

  return (
    <div className={css.App}>
      <Searchbar onSubmit={onFormSubmit} />
      <ImageGallery
        foundImg={value}
        showModal={toggleModal}
        getImg={getModalImg}
      />
      {showModal && <Modal src={modalImg} toggleModal={toggleModal} />}
    </div>
  );
}
