import React from 'react';

import UsersContainer from './users_container';

class Welcome extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section className="welcome-page">
        <main>
          <article className="welcome-box">
            <i className="fa fa-home" aria-hidden="true"></i>
            <h1>Welcome to Instagames!</h1>
            <p>Follow other accounts to see photos in your feed.</p>
            <p>Upload photos to share your adventures with your friends.</p>
          </article>

          <UsersContainer />
        </main>
      </section>
    );
  }
}

export default Welcome;