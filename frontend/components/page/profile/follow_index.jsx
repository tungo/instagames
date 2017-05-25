import React from 'react';

import FollowItemContainer from './follow_item_container';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { followType } = this.props;
    return (
      <article className="follows">
        <div>
          <header>
            <h1>{followType}</h1>
          </header>
          <main>
            <ul className="follows-list">
            {
              this.props.follows.map((user) => <li key={user.id}>
                  <FollowItemContainer
                    user={user}
                    closeModal={this.props.closeModal}
                  />
              </li>)
            }
            </ul>
          </main>
        </div>
      </article>
    );
  }
}

export default FollowIndex;