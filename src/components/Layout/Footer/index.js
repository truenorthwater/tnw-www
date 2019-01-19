import React from 'react';
import { Link } from "gatsby";
import LogoMark from "../../LogoMark";

import IconFacebook from "../../Icon/IconFacebook";
import IconTwitter from "../../Icon/IconTwitter";
import IconInstagram from "../../Icon/IconInstagram";

const Footer = () => (
    <footer className="t-footer" id="contact">
      <div className="row row--wide t-footer__inner">
        <div className="col large-1 t-footer__logo">
          <LogoMark />
        </div>
        <div className="col medium-5 large-4  t-footer__contentleft">
          <p className="bodytext bodytext--large bodytext--light">
            True North Water is a public foundation dedicated to bringing safe, 
            clean drinking water to those around the world who desperately need it most. 
          </p>

          <a className="bodytext bodytext--large t-footer__link t-footer__email" href="mailto:info@truenorthwater.org">info@truenorthwater.org</a>
          
          <p className="bodytext bodytext--light">
            65 Sherwood Lane NW, Calgary AB, T3R 0V3, Canada
          </p>
        </div>

        <div className="col medium-7 t-footer__contentright">
          <nav className="bodytext bodytext--large t-footer__menu">
            <ul className="t-footer__menulist" role="menu">
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/thirst" className="t-footer__menulink  t-footer__link" role="menuitem">Thirst Initiative</Link>
              </li>
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/#projects" className="t-footer__menulink  t-footer__link" role="menuitem">Projects</Link>
              </li>
              <li className="t-footer__menuitem" role="presentation">
                <Link to="/refunds" className="t-footer__menulink  t-footer__link" role="menuitem">Refund Policy</Link>
              </li>
              <li className="t-footer__menuitem" role="presentation">
                <Link to='/#donate' className="t-footer__menulink  t-footer__link" role="menuitem">Donate</Link>
              </li>
            </ul>
          </nav>

          <nav className="t-footer__social">
            <ul className="t-footer__sociallist"  role="menu">
              <li className="t-footer__socialitem" role="presentation">
                <a className="t-footer__sociallink" href="https://www.facebook.com/truenorthwater/">
                  <IconFacebook className="t-footer__socialicon" />
                </a>
              </li>
              <li className="t-footer__socialitem" role="presentation">
                <a className="t-footer__sociallink" href="https://twitter.com/truenorthwater/">
                  <IconTwitter className="t-footer__socialicon" />
                </a>
              </li>
              <li className="t-footer__socialitem" role="presentation">
                <a className="t-footer__sociallink" href="https://www.instagram.com/truenorthwater/">
                  <IconInstagram className="t-footer__socialicon" />
                </a>
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
