import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Footer = () =>
  <footer>
    <section className="container">
      <aside>
        {/* &copy; gr4y */}
      </aside>
      <aside>
        <a href="https://github.com/imgr4y" id="header-links">github</a>
        <a href="https://twitter.com/imgr4y"  id="header-links">twitter</a>
      </aside>
    </section>
  </footer>

export default Footer;