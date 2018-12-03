import React from 'react';
import { Link } from 'gatsby';

import LogoFull from "./LogoFull";

const Header = ({ siteTitle }) => (
  <section className="t-header">
    <nav className="t-header__inner row">
      <LogoFull className="t-header__logo" />

      <ul className="t-header__menu" role="menu">
        <li className="t-header__menuitem" role="presentation">
          <Link className="t-header__menulink" to="/mission" role="menuitem">Mission</Link>
        </li>
        <li className="t-header__menuitem" role="presentation">
          <Link className="t-header__menulink" to="/#projects" role="menuitem">Projects</Link>
        </li>
        <li className="t-header__menuitem" role="presentation">
          <Link className="t-header__menulink" to="/#contact" role="menuitem">Contact</Link>
        </li>
      </ul>

      <span className="t-header__cta">
        <button className="button button--primary">Donate</button>
      </span>
    </nav>
  </section>
)

export default Header;
