import { useEffect, useState } from "react";
import React from "react";
import "./stylesheet/AllProduct.css";
import Loader from "./Loader";
import Product from "./Product";

const AllProducts = () => {
  const [error, setError] = useState(null);
      const [loading, setLoading] = useState(false);
      const [tags, setTags] = useState([]);
      const [searchTerm, setSearchTerm] = useState("");
  
      useEffect(() => {
          const fetchAllProducts = async () => {
              try {
                  const response = await fetch('https://dummyjson.com/products?limit=40');
                  if (!response.ok) {
                      throw new Error('Failed to fetch products');
                  }
  
                  const data = await response.json();
                  
                  // Extract all unique tags from products
                  const allTags = data.products.reduce((acc, product) => {
                      if (product.tags && Array.isArray(product.tags)) {
                          product.tags.forEach(tag => {
                              if (!acc.includes(tag)) {
                                  acc.push(tag);
                              }
                          });
                      }
                      return acc;
                  }, []);
                  
                  setTags(allTags);
                  setLoading(false);
              } catch (err) {
                  setError(err.message);
                  setLoading(false);
              }
          };
  
          fetchAllProducts();
      }, []);
  
      const handleTagClick = (tag) => {
          setSearchTerm(tag);
      };
  
      const handleSearchChange = (e) => {
          setSearchTerm(e.target.value);
      };
  
      if (loading) {
          return <Loader/>;
      }
  
      if (error) {
          return <h1>Error: {error}</h1>;
      }
  return (
    <>
      <section className="all-product-section">
        <div className="all-product-content">

          <div className="search-content">
            <div className="search-box-container">
              <input
                type="text"
                placeholder="Search your item..."
                className="searchbox"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div className="category-buttons">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  id="bottone5"
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <Product text={"We found some items of yur interest😍"} tag={searchTerm} number={4}/>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
