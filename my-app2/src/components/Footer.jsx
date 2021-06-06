import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container footer-container align-items-center">
        <div class="row">
          <div class="col-sm-4">
            <ul>
              <nav class="menufooter">
                <h3 class="footer__link">Ayuda</h3>
                <li>
                  <a href="" class="footer__link">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="" class="footer__link">
                    Ubicación
                  </a>
                </li>
                <li>
                  <a href="" class="footer__link">
                    Consultas comunes
                  </a>
                </li>
              </nav>
            </ul>
          </div>
          <div class="col-sm-4">
            <ul>
              <nav class="menufooter">
                <h3 class="footer__link">Contacto</h3>
                <li>
                  <a href="" class="footer__link">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="" class="footer__link">
                    Local
                  </a>
                </li>
              </nav>
            </ul>
          </div>
          <div class="col-sm-4">
            <ul>
              <nav class="menufooter">
                <h3 class="footer__link">Marcas</h3>
                <li>
                  <a href="" class="footer__link">
                    NVIDIA
                  </a>
                </li>
                <li>
                  <a href="" class="footer__link">
                    AMD
                  </a>
                </li>
                <li>
                  <a href="" class="footer__link">
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
