import React from 'react';
import Modal from 'react-modal';

import PhotoDetailContainer from './photo_detail_container';

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
    this.setState({modalOpen: false});
  }

  openModal(e) {
    this.setState({modalOpen: true});
  }

  openPhotoDetail(id) {
    return (e) => {
      e.preventDefault();

      const photo = this.props.fetchPhotoDetail(id);
      if (photo.id === id) {
        return this.openModal(e);
      }
      return photo.then(() => this.openModal(e));
    };
  }

  renderPhotos() {
    const { photos } = this.props;
    if (photos.length < 1) {
      return '';
    }

    const content = photos.map((photo) => (
      <li key={`photo-${photo.id}`}>
        <button
          className="image-button"
          onClick={this.openPhotoDetail(photo.id)}
        >
          <img
            src={photo.urlMedium}
            alt={`photo-${photo.id}`}
          />

          <div className="highlight-overlay">
            <div className="highlight">
              <div>
                <i className="fa fa-heart" aria-hidden="true"></i>
                {photo.likesCount}
              </div>

              <div>
                <i className="fa fa-comment" aria-hidden="true"></i>
                {photo.commentsCount}
              </div>
            </div>
          </div>
        </button>
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
          contentLabel="PhotoDetailModal"
          className="modal photo-detail-modal"
          overlayClassName="modal-overlay photo-detail-modal-overlay"
        >
          <div className="modal-guts">
            <PhotoDetailContainer closeModal={this.closeModal} />
          </div>
        </Modal>
      </main>
    );
  }
}

export default PhotoIndex;