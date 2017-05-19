import React from 'react';
import Modal from 'react-modal';

import PhotoDetailContainer from './photo_detail_container';

const style = {
  overlay: {
    // display: 'flex', // make content stay at center
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,

    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: '100px auto',
    width: '900px',
    padding: 0,
    zIndex: 11,

    border: 'none',
    borderRadius: 'none'
  }
};

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();

    this.setState({modalOpen: false});
  }

  openModal(e) {
    e.preventDefault();

    this.setState({modalOpen: true});
  }

  openPhotoDetail(id) {
    return (e) => {
      e.preventDefault();

      const photo = this.props.fetchPhotoDetail(id);
      if (photo.id === id) {
        return this.openModal(e);
      }
      return photo.then(() => this.openModal(e))
    };
  }

  renderPhotos() {
    const { photos } = this.props;
    if (photos.length < 1) {
      return '';
    }

    const content = photos.map((photo) => (
      <li key={`photo-${photo.id}`}>
        <img
          src={photo.url}
          alt={`photo-${photo.caption}`}
          onClick={this.openPhotoDetail(photo.id)}
        />
      </li>
    ));

    return content;
  }

  render() {
    return (
      <main className="photos">
        <ul>
          {this.renderPhotos()}
        </ul>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="PhotoDetailModal"
        >
          <PhotoDetailContainer closeModal={this.closeModal} />
        </Modal>
      </main>
    );
  }
}

export default PhotoIndex;