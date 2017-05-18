import React from 'react';
import Modal from 'react-modal';

import UploadFormContainer from './upload_form_container';

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

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="button-link">
          <i className="fa fa-plus-square-o"></i>
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="UploadModal"
        >
          <UploadFormContainer closeModal={this.closeModal} />

        </Modal>
      </div>
    );
  }
}

export default Upload;