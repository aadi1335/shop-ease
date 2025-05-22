import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './stylesheet/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
        setMainImage(data.thumbnail);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading-spinner"></div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    <div className="product-detail">
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/category/${product.category}`}>{product.category}</Link> / <span>{product.title}</span>
      </div>

      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={mainImage} alt={product.title} />
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1>{product.title}</h1>
            <div className="brand-badge">{product.brand}</div>
          </div>

          <div className="rating-container">
            <div className="stars">
              {'★'.repeat(Math.round(product.rating))}
              {'☆'.repeat(5 - Math.round(product.rating))}
              <span>({product.rating})</span>
            </div>
            <div className="review-count">{product.reviews?.length || 0} reviews</div>
          </div>

          <div className="price-container">
            <span className="current-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <>
                <span className="original-price">
                  ${Math.round(product.price / (1 - product.discountPercentage/100))}
                </span>
                <span className="discount-badge">
                  -{product.discountPercentage}%
                </span>
              </>
            )}
          </div>

          <div className="availability">
            {product.stock > 0 ? (
              <span className="in-stock">In Stock ({product.stock} available)</span>
            ) : (
              <span className="out-of-stock">Out of Stock</span>
            )}
          </div>

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="product-specs">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Category</span>
            <span className="spec-value">{product.category}</span>
          </div>
          {product.dimensions && (
            <>
              <div className="spec-item">
                <span className="spec-label">Width</span>
                <span className="spec-value">{product.dimensions.width || 'N/A'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Height</span>
                <span className="spec-value">{product.dimensions.height || 'N/A'}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Depth</span>
                <span className="spec-value">{product.dimensions.depth || 'N/A'}</span>
              </div>
            </>
          )}
          <div className="spec-item">
            <span className="spec-label">Weight</span>
            <span className="spec-value">{product.weight || 'N/A'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Color</span>
            <span className="spec-value">{product.color || 'N/A'}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Warranty</span>
            <span className="spec-value">{product.warrantyInformation || '1 year'}</span>
          </div>
        </div>
      </div>

      <div className="product-reviews">
        <h2>Customer Reviews</h2>
        {product.reviews?.length > 0 ? (
          <div className="reviews-grid">
            {product.reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </div>
                  <div className="review-author">{review.reviewerName || 'Anonymous'}</div>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;