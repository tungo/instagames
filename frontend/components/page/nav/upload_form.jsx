import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: ''
    };
  }

  updateInput(name) {
    return (e) => this.setState({[name]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createPhoto(this.state);
  }

  render() {
    return (
      <div>
        <form>

          <input
            type="text"
            value={this.state.caption}
            onChange={this.updateInput('caption')}
          />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UploadForm;