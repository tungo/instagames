import React from 'react';
import Modal from 'react-modal';

class ConfirmModal extends React.Component {
  constructor(props) {
    super(props);

    // props:
    // confirmOpen: boolean
    // confirmText: string
    // handleConfirm: function

    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.modalOpen !== nextProps.confirmOpen) {
      this.setState({modalOpen: nextProps.confirmOpen});
    }
  }

  closeModal(e) {
    this.setState({modalOpen: false});

    if (this.props.closeConfirm) {
      this.props.closeConfirm();
    }
  }

  openModal(e) {
    this.setState({modalOpen: true});
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="ConfirmModal"
          className="modal confirm-modal"
          overlayClassName="modal-overlay confirm-modal-overlay"
        >
          <div className="modal-guts">
            <div className="confirm">
              <ul>
                <li>
                  <header>{this.props.confirmText}</header>
                </li>

                <li>
                  <button
                    className="blue"
                    type="submit"
                    onClick={this.props.handleConfirm}
                  >
                    OK
                  </button>

                  <button
                    onClick={this.closeModal}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ConfirmModal;