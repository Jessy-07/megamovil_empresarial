import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-top">
          <div className="footer-brand">
            <img src="" alt="Mega Móvil Logo" className="footer-logo" />
            <h2 className="footer-brand-text">Mega móvil</h2>
          </div>
          
          <nav className="footer-nav">
            <a href="#">AYUDA</a>
            <a href="#">LEGALES <span className="arrow">▸</span></a>
            <a href="#">GARANTÍAS</a>
            <a href="#">BLOG</a>
          </nav>
        </div>

        <div className="footer-middle">
          <p className="footer-description">
            La telefonía celular de Megacable que te mantiene conectado donde estés, con planes flexibles, cobertura confiable y la facilidad de integrar tus servicios en un solo lugar. Disfruta más datos, más comunicación y más libertad para moverte con Mega.
          </p>
          
          <div className="footer-location">
            <a href="#">LOCALIZA TU CIS MÁS CERCANO</a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copyright">
            MEGACABLE ©2026
          </div>
          
          <div className="footer-contact">
            <a href="tel:3396900000">CONSULTAS Y SOPORTE TÉCNICO 33 9690 0000</a>
          </div>
          
          <div className="footer-social">
            {/* Social icon placeholders */}
            <a href="#" className="social-icon facebook" title="Facebook"></a>
            <a href="#" className="social-icon x-twitter" title="X (Twitter)"></a>
            <a href="#" className="social-icon youtube" title="YouTube"></a>
            <a href="#" className="social-icon instagram" title="Instagram"></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
