import React from 'react';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: '',
      imageFile: null,
      imageUrl: null
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
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  updateInput(name) {
    return (e) => this.setState({[name]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    var file = this.state.imageFile;

    var formData = new FormData();
    formData.append('photo[caption]', this.state.caption);
    formData.append('photo[image]', file);

    this.props.createPhoto(formData);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="upload-form">
        <ul>
          <li>
            <h3 className="title">Upload photo</h3>
          </li>

          <li>
            <input
              type="file"
              onChange={this.updateFile}
              className="file"
            />

            <img src={this.state.imageUrl} className="image" />
          </li>

          <li>
            <input
              type="text"
              value={this.state.caption}
              onChange={this.updateInput('caption')}
              className="input"
              placeholder="Caption"
            />
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

export default UploadForm;