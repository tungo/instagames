import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      imageFile: '',
      imageUrl: '',
      submiting: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => (
      this.setState({ imageUrl: fileReader.result, imageFile: file})
    );

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: '', imageFile: '' });
    }
  }

  updateInput(name) {
    return (e) => this.setState({[name]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submiting: true});

    const file = this.state.imageFile;

    const formData = new FormData();
    formData.append('photo[caption]', this.state.caption);
    formData.append('photo[image]', file);

    this.props.createPhoto(formData)
      .then(() => this.props.closeModal())
      .always(() => this.setState({submiting: false}));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    const { errors } = this.props;

    if (errors.length < 1) {
      return '';
    }

    const content = errors.map((err, i) => <li key={i}>{err}</li>);
    return (
      <li>
        <ul className="errors">
          {content}
        </ul>
      </li>
    );
  }

  render() {
    return (
      <form>
        <div className="upload-form">
          <ul>
            <li>
              <h3 className="title">Upload photo</h3>
            </li>

            {this.renderErrors()}

            <li>
              <div className="image-input">
                <input
                  type="file"
                  onChange={this.updateFile}
                  className="file"
                />

                <div className="image">
                  <img src={this.state.imageUrl} />
                </div>
              </div>
            </li>

            <li>
              <input
                type="text"
                value={this.state.caption}
                onChange={this.updateInput('caption')}
                className="input"
                placeholder="Write a caption..."
              />
            </li>

            <li>
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="button blue"
                disabled={this.state.submiting}
              >{this.state.submiting ? 'Submiting' : 'Submit'}</button>

              <button
                onClick={this.props.closeModal}
                className="button"
              >Cancel</button>
            </li>

          </ul>
        </div>
      </form>
    );
  }
}

export default UploadForm;