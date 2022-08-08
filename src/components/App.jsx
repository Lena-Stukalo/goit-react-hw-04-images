import { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    value: '',
    showModal: false,
    modalImg: '',
  };
  onFormSubmit = ({ value }) => {
    this.setState({ value: value });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  getModalImg = img => {
    this.setState({ modalImg: img });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery
          foundImg={this.state.value}
          showModal={this.toggleModal}
          getImg={this.getModalImg}
        />
        {this.state.showModal && (
          <Modal src={this.state.modalImg} toggleModal={this.toggleModal} />
        )}
      </div>
    );
  }
}
