import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './stylesheet/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/" className="navbar-brand">
              ShopEase
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-links">
            <div className="navbar-links">
              <Link to="/" className="navbar-link">Home</Link>
              <Link to="/products" className="navbar-link">Products</Link>
              <Link to="/categories" className="navbar-link">Categories</Link>
              <Link to="/deals" className="navbar-link">Deals</Link>
              <Link to="/about" className="navbar-link">About</Link>
            </div>
          </div>

          {/* Search and Icons */}
          <div className="navbar-actions">
            <div className="navbar-search">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
              <FaSearch className="search-icon" />
            </div>
            <Link to="/cart" className="navbar-icon cart-icon">
              <FaShoppingCart />
              <span className="cart-badge">0</span>
            </Link>
            <Link to="/account" className="navbar-icon">
              <FaUser />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-actions">
            <Link to="/cart" className="navbar-icon cart-icon">
              <FaShoppingCart />
              <span className="cart-badge">0</span>
            </Link>
            <button
              onClick={toggleMenu}
              className="navbar-toggle"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            <div className="mobile-links">
              <Link to="/" className="mobile-link">Home</Link>
              <Link to="/products" className="mobile-link">Products</Link>
              <Link to="/categories" className="mobile-link">Categories</Link>
              <Link to="/deals" className="mobile-link">Deals</Link>
              <Link to="/about" className="mobile-link">About</Link>
            </div>
            <div className="mobile-search">
              <input
                type="text"
                placeholder="Search products..."
                className="search-input"
              />
              <FaSearch className="search-icon" />
            </div>
            <div className="mobile-account">
              <Link to="/account" className="account-link">
                <FaUser className="account-icon" />
                Account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
