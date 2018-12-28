import React from 'react';
import { Link } from 'gatsby';

import LogoFull from "../../LogoFull";

const Header = () => (
  <section className="t-header">
    <nav className="t-header__inner row row--wide">
      <LogoFull classNames={{logo: "t-header__logo", word: "t-header__logoword"}} />

      <ul className="t-header__menu" role="menu">
        <li className="t-header__menuitem" role="presentation">
          <Link className="t-header__menulink" to="/thirst" role="menuitem">Thirst Initiative</Link>
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
