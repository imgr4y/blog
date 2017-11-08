import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => 
  <nav>
    <section className="container">
      <aside className="nav-title">
        <NavLink to="/" exact id="header-links" id="title-link">gr4y.me</NavLink>
      </aside>
      <aside className="link-border links-left">
        <NavLink to="/blog" id="header-links">blog</NavLink>
        <NavLink to="/oscp" id="header-links">oscp journey</NavLink>
        <NavLink to="/contact" className="nav-contact-btn" id="header-links">contact</NavLink>
      </aside>
    </section>
  </nav>
  
export default Nav;