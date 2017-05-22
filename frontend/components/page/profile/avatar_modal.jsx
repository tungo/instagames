import React from 'react';
import Modal from 'react-modal';

import AvatarFormContainer from './avatar_form_container';

class AvatarModal extends React.Component {
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

  render() {
    return (
      <figure className="avatar-modal">
        <img
          src={this.props.user.avatar}
          alt={this.props.user.username}
          onClick={this.openModal}
          className="image-circle clickable"
        />

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="AvatarModal"
          className="modal upload-modal"
          overlayClassName="modal-overlay upload-modal-overlay"
        >
          <div className="modal-guts">
            <AvatarFormContainer closeModal={this.closeModal} />
          </div>
        </Modal>
      </figure>
    );
  }
}

export default AvatarModal;