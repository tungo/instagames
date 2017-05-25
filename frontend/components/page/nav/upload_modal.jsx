import React from 'react';
import Modal from 'react-modal';

import UploadFormContainer from './upload_form_container';

class UploadModal extends React.Component {
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
    let button = <i className="fa fa-plus-square-o" aria-hidden="true"></i>;
    if (this.props.floatingUpload) {
      button = <i className="fa fa-plus-circle" aria-hidden="true"></i>;
    }

    return (
      <div>
        <button onClick={this.openModal} className="button-link">
          {button}
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="UploadModal"
          className="modal upload-modal"
          overlayClassName="modal-overlay upload-modal-overlay"
        >
          <div className="modal-guts">
            <UploadFormContainer closeModal={this.closeModal} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default UploadModal;