import React from 'react';
import Modal from 'react-modal';

import FollowIndexContainer from './follow_index_container';

class FollowModal extends React.Component {
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
        <button
          className="count"
          onClick={this.openModal}
        >
          <span>{this.props.count} </span> {this.props.followType}
        </button>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="FollowModal"
          className="modal follow-modal"
          overlayClassName="modal-overlay follow-modal-overlay"
        >
          <div className="modal-guts">
            <div>
              <FollowIndexContainer
                closeModal={this.closeModal}
                followType={this.props.followType}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default FollowModal;