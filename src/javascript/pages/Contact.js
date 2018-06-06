import React from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends React.Component {
  componentDidMount() {
    document.title = 'gr4y.me | contact me';
  }

  render() {
    return (
      <section className="container fadeInUp">
        <div>
          <p>
            email:</p>
          <p>
            hi at gr4y dot me
          </p>
        </div>
      </section>
    )
  }
}