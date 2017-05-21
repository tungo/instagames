import React from 'react';

class Loading extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    if (!this.props.loading) {
      return <div className="hide"></div>;
    }

    return (
      <div className="loading">
        <div className="loading-progress"></div>
      </div>
    );
  }
}

export default Loading;