import { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart, FaArrowRight } from 'react-icons/fa';
import './stylesheet/Deals.css';
import Loader from './Loader';

const Deals = () => {
  const [products, setProducts] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter deals based on discount percentage
  useEffect(() => {
    if (products.length > 0) {
      let deals = [...products];
      
      // Sort by highest discount first
      deals.sort((a, b) => b.discountPercentage - a.discountPercentage);
      
      // Apply additional filters
      switch(activeFilter) {
        case 'high-discount':
          deals = deals.filter(product => product.discountPercentage >= 20);
          break;
        case 'low-discount':
          deals = deals.filter(product => product.discountPercentage < 20);
          break;
        case 'ending-soon':
          // Simulate ending soon by filtering newer products
          deals = deals.slice(0, 10);
          break;
        default:
          // 'all' - no additional filtering
          break;
      }
      
      setFilteredDeals(deals);
    }
  }, [products, activeFilter]);

  const toggleWishlist = (productId) => {
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
    } else {
      setWishlist([...wishlist, productId]);
    }
  };

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="star half-filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    return stars;
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="deals-page">
      {/* Deals Hero Banner */}
      <section className="deals-hero">
        <div className="deals-hero-content">
          <h1>Hot Deals & Discounts</h1>
          <p>Don't miss out on these limited-time offers</p>
          <button className="view-all-button">
            Shop All Deals <FaArrowRight className="button-icon" />
          </button>
        </div>
      </section>

      {/* Deals Filter */}
      <section className="deals-filter">
        <div className="filter-container">
          <button 
            className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Deals
          </button>
          <button 
            className={`filter-button ${activeFilter === 'high-discount' ? 'active' : ''}`}
            onClick={() => setActiveFilter('high-discount')}
          >
            20%+ Off
          </button>
          <button 
            className={`filter-button ${activeFilter === 'low-discount' ? 'active' : ''}`}
            onClick={() => setActiveFilter('low-discount')}
          >
            Under 20% Off
          </button>
          <button 
            className={`filter-button ${activeFilter === 'ending-soon' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ending-soon')}
          >
            Ending Soon
          </button>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="deals-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>{activeFilter === 'all' ? 'All Deals' : 
                 activeFilter === 'high-discount' ? 'Big Discounts (20%+ Off)' :
                 activeFilter === 'low-discount' ? 'Small Discounts' : 'Ending Soon'}</h2>
            <p>{filteredDeals.length} deals available</p>
          </div>

          {filteredDeals.length > 0 ? (
            <div className="deals-grid">
              {filteredDeals.map(product => (
                <div key={product.id} className="deal-card">
                  <div className="deal-badge">
                    -{Math.round(product.discountPercentage)}%
                  </div>
                  <div className="deal-image-container">
                    <img 
                      src={product.thumbnail} 
                      alt={product.title} 
                      className="deal-image"
                    />
                    <button 
                      className="wishlist-button"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      {wishlist.includes(product.id) ? (
                        <FaHeart className="wishlist-icon filled" />
                      ) : (
                        <FaRegHeart className="wishlist-icon" />
                      )}
                    </button>
                  </div>
                  <div className="deal-details">
                    <h3 className="deal-title">{product.title}</h3>
                    <div className="deal-brand">{product.brand}</div>
                    <div className="deal-rating">
                      {renderRating(product.rating)}
                      <span className="rating-count">({product.rating})</span>
                    </div>
                    <div className="deal-price">
                      <span className="current-price">
                        ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
                      </span>
                      <span className="original-price">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="time-left">
                      <span className="time-text">Ends in: </span>
                      <span className="time-value">2d 12h 30m</span>
                    </div>
                    <button className="add-to-cart">
                      <FaShoppingCart className="cart-icon" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-deals">
              <p>No deals match your current filter.</p>
              <button 
                className="reset-filter"
                onClick={() => setActiveFilter('all')}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="deals-newsletter">
        <div className="newsletter-content">
          <h2>Want More Deals?</h2>
          <p>Subscribe to our newsletter for exclusive offers</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Deals;