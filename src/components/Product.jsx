import { useState, useEffect } from 'react';
import './stylesheet/ProductSection.css';
import { FaStar, FaRegStar, FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import Loader from './Loader';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=8');
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
    return <Loader/>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="product-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Discover our most popular items</p>
        </div>

        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="product-image"
                />
                <div className="product-badge">
                  {product.discountPercentage > 10 && (
                    <span className="discount-badge">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}
                </div>
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
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <div className="product-brand">{product.brand}</div>
                <div className="product-rating">
                  {renderRating(product.rating)}
                  <span className="rating-count">({product.rating})</span>
                </div>
                <div className="product-price">
                  <span className="current-price">
                    ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}
                  </span>
                  {product.discountPercentage > 0 && (
                    <span className="original-price">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <button className="add-to-cart">
                  <FaShoppingCart className="cart-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="view-all-button">View All Products</button>
        </div>
      </div>
    </section>
  );
};

export default Product;