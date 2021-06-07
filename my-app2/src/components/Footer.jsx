import React from "react";

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
                  <a href="" className="footer__link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="" className="footer__link">
                    Ubicación
                  </a>
                </li>
                <li>
                  <a href="" className="footer__link">
                    Consultas comunes
                  </a>
                </li>
              </nav>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul>
              <nav className="menufooter">
                <h3 className="footer__link">Contacto</h3>
                <li>
                  <a href="" className="footer__link">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="" className="footer__link">
                    Local
                  </a>
                </li>
              </nav>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul>
              <nav className="menufooter">
                <h3 className="footer__link">Marcas</h3>
                <li>
                  <a href="" className="footer__link">
                    NVIDIA
                  </a>
                </li>
                <li>
                  <a href="" className="footer__link">
                    AMD
                  </a>
                </li>
                <li>
                  <a href="" className="footer__link">
                    INTEL
                  </a>
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
