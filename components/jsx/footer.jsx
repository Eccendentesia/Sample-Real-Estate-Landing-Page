import React from "react";
import "../css/footer.css";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Column 1 */}
          <div className="footer-col">
            <div className="footer-logo">
              <div className="logo-icon">☀</div>
              <div>
                <h4>UrbanAxis Realty</h4>
                <p className="subtitle">Premium Property Advisory</p>
              </div>
            </div>

            <p className="footer-description">
              Experience high-end real estate consulting with strategic guidance
              and market intelligence tailored for serious investors.
            </p>

            <div className="social-icons">
              <span>f</span>
              <span>ig</span>
              <span>in</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              <li>Home</li>
              <li>Advisory</li>
              <li>Investments</li>
              <li>Insights</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li>Portfolio Strategy</li>
              <li>Luxury Properties</li>
              <li>Market Analysis</li>
              <li>Asset Optimization</li>
              <li>Investment Consulting</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h5>Contact Info</h5>
            <ul className="contact-info">
              <li>123 Financial District, Mumbai</li>
              <li>+91 98765 43210</li>
              <li>info@urbanaxis.com</li>
              <li>Mon–Sat: 9am–6pm</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 UrbanAxis Realty. All rights reserved.</p>

          <div className="footer-legal">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};