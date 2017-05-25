import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <section className="error-page">
    <main>
      <h1>Sorry, an error occurred.</h1>
      <p>The link you followed may be broken, or the page may have been removed.</p>
      <Link to="/">Go back to Instagames</Link>
    </main>
  </section>
);