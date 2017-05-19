import React from 'react';
import Modal from 'react-modal';

import AvatarFormContainer from './avatar_form_container';

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
    width: '500px',
    padding: 0,
    zIndex: 11,

    border: 'none',
    borderRadius: 'none'
  }
};

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
          className="image-circle"
        />

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="AvatarModal"
        >
          <AvatarFormContainer closeModal={this.closeModal} />
        </Modal>
      </figure>
    );
  }
}

export default AvatarModal;