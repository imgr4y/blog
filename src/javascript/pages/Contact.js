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
            my <a href="https://twitter.com/imgr4y">twitter</a> dms are open, but feel free to email me here:</p>
          <p>
            hi at gr4y dot me
          </p>
        </div>
      </section>
    )
  }
}