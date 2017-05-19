import React from 'react';

class AvatarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: '',
      imageUrl: ''
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

  handleSubmit(e) {
    e.preventDefault();

    const file = this.state.imageFile;

    if (file === '') {
      this.props.receiveFormErrors(["Avatar can't be blank"]);
      return;
    }

    const formData = new FormData();
    formData.append('user[avatar]', file);

    this.props.updateAvatar(formData)
      .then(() => this.props.closeModal());
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
      <div className="upload-form">
        <ul>
          <li>
            <h3 className="title">Upload your avatar</h3>
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
            <button
              onClick={this.handleSubmit}
              className="button blue"
            >Submit</button>

            <button
              onClick={this.props.closeModal}
              className="button"
            >Cancel</button>
          </li>

        </ul>
      </div>
    );
  }
}

export default AvatarForm;