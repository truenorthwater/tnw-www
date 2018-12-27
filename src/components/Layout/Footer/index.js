import React from 'react';
import { Link } from "gatsby";
import LogoMark from "../../LogoMark";

const Footer = () => (
    <footer className="t-footer">
      <div className="row row--wide">
        <div className="col medium-1">
          <LogoMark className="t-footer__logo" />
        </div>
        <div className="col medium-4">
          <p className="bodytext bodytext--large bodytext--light">
            True North Water is a public foundation dedicated to bringing safe, 
            clean drinking water to those around the world who desperately need it most. 
          </p>

          <a className="bodytext bodytext--large t-footer__link" href="mailto:info@truenorthwater.org">info@truenorthwater.org</a>
        </div>

        <div className="col medium-7 t-footer__contentright">
          <nav className="bodytext bodytext--large t-footer__menu">
            <ul className="t-footer__menulist" role="menu">
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/mission" className="t-footer__menulink  t-footer__link" role="menuitem">Mission</Link>
              </li>
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/projects" className="t-footer__menulink  t-footer__link" role="menuitem">Projects</Link>
              </li>
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/contact" className="t-footer__menulink  t-footer__link" role="menuitem">Contact</Link>
              </li>
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/donate" className="t-footer__menulink  t-footer__link" role="menuitem">Donate</Link>
              </li>
            </ul>
          </nav>

          <p className="bodytext bodytext--large bodytext--light t-footer__charitynumber">
            Registered Charity Number:  <em>78731 5514 RR0001</em>
          </p>

          <p className="bodytext bodytext--light">
            Copyright &copy; True North Water Charity {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
)

export default Footer;