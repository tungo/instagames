import React from 'react';
import merge from 'lodash/merge';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      submitting: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(name) {
    return (e) => {
      e.preventDefault();

      this.setState({[name]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitting: true});

    const comment = merge({}, this.state, {photo_id: this.props.photoId});
    this.props.createComment(comment)
      .then(() => this.setState({body: ''}))
      .always(() => this.setState({submitting: false}));
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add a comment..."
          value={this.state.body}
          onChange={this.updateInput('body')}
        />

        <button
          type="submit"
          onClick={this.handleSubmit}
        >
          <i className="fa fa-check" aria-hidden="true"></i>
        </button>
      </form>
    );
  }
}

export default Comment;