import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container align-items-center">
        <div className="row">
          <div className="col-sm-4">
            <ul>
              <nav className="menufooter">
                <h3 className="footer__link">Ayuda</h3>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Ubicación</Link>
                </li>
                <li>
                  <Link to="/">Consultas comunes</Link>
                </li>
              </nav>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul>
              <nav className="menufooter">
                <h3 className="footer__link">Contacto</h3>
                <li>
                  <Link to="/">Whatsapp</Link>
                </li>
                <li>
                  <Link to="/">Local</Link>
                </li>
              </nav>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul>
              <nav className="menufooter">
                <h3 className="footer__link">Marcas</h3>
                <li>
                  <a href="https://www.nvidia.com/en-us/">NVIDIA</a>
                </li>
                <li>
                  <a href="https://www.amd.com/en">AMD</a>
                </li>
                <li>
                  <a href="https://www.intel.com/content/www/us/en/homepage.html">Intel</a>
                </li>
              </nav>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
