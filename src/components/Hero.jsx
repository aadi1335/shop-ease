import './stylesheet/HeroSection.css';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Main Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Summer Collection 2025</h1>
            <p className="hero-subtitle">Discover our new arrivals with up to 40% discount</p>
            <button className="hero-button">
              Shop Now <FaArrowRight className="hero-button-icon" />
            </button>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Summer Collection" 
            />
          </div>
        </div>

        {/* Featured Categories */}
        <div className="featured-categories">
          <div className="category-card">
            <div className="category-icon">👕</div>
            <h3>Men's Fashion</h3>
            <p>Explore trendy outfits</p>
          </div>
          <div className="category-card">
            <div className="category-icon">👗</div>
            <h3>Women's Fashion</h3>
            <p>New arrivals</p>
          </div>
          <div className="category-card">
            <div className="category-icon">📱</div>
            <h3>Electronics</h3>
            <p>Gadgets & devices</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🏠</div>
            <h3>Home & Living</h3>
            <p>Comfort for your home</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;