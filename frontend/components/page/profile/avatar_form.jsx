import React from 'react';

class AvatarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: '',
      imageUrl: '',
      submiting: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

    this.setState({submiting: true});

    const formData = new FormData();
    formData.append('user[avatar]', file);

    this.props.updateAvatar(formData)
      .then(() => this.props.closeModal())
      .always(() => this.setState({submiting: false}));
  }

  handleDelete(e) {
    e.preventDefault();

    this.setState({submiting: true});

    this.props.deleteAvatar()
      .then(() => this.props.closeModal())
      .always(() => this.setState({submiting: false}));
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  renderErrors() {
    const { errors } = this.props;

    if (errors.length < 1) {
      return;
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
            {
              (!this.props.isAvatar)
                ? ''
                : <li>
                  <button
                    onClick={this.handleDelete}
                    className="button wide"
                    disabled={this.state.submiting || !this.props.isAvatar}
                  >Remove Current Avatar</button>
                </li>
            }
            <li>
              <h3 className="title">Upload New Avatar</h3>
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

export default AvatarForm;