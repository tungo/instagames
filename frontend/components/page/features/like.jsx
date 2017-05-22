import React from 'react';

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitting: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.setState({submitting: true});

    const { photoId, currentUserLiked, likePhoto, unlikePhoto } = this.props;
    let result = (currentUserLiked)
                 ? unlikePhoto(photoId)
                 : likePhoto(photoId);
    result.always(() => this.setState({submitting: false}));
  }

  render() {
    const { photoId, currentUserLiked } = this.props;

    let icon = 'fa-heart-o';
    let button = 'like';
    if (currentUserLiked) {
      icon = 'fa-heart';
      button = 'unlike';
    }

    return (
      <div>
        <button
          className={`button-link like-button ${button}`}
          onClick={this.handleClick}
        >
          <i className={`fa ${icon}`} aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Like;