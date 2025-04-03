import './stylesheet/Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-title">ShopEase</h3>
            <p className="footer-about">
              Your one-stop destination for all your shopping needs. We offer quality products with fast delivery and excellent customer service.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/deals">Special Deals</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h3 className="footer-title">Customer Service</h3>
            <ul className="footer-links">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping">Shipping Policy</a></li>
              <li><a href="/returns">Return Policy</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/track-order">Track Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-title">Newsletter</h3>
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="footer-newsletter">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="footer-input"
              />
              <button type="submit" className="footer-button">Subscribe</button>
            </form>
            <div className="payment-methods">
              <span>We accept:</span>
              <div className="payment-icons">
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcPaypal />
                <FaCcApplePay />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <span> | </span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;