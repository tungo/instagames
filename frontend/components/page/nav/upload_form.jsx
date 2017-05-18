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

    // this.props.createPhoto(this.state);
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

          <input
            type="file"
            onChange={this.updateFile}
          />

          <img src={this.state.imageUrl} />

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default UploadForm;