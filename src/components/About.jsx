import React from 'react';
import './stylesheet/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1><u>Our Story</u></h1>
        <p className="subtitle">Simplifying your shopping experience since 2023 <br></br>
        We believe in making online shopping straightforward, enjoyable, and accessible to everyone. 
            No complicated features, just quality products presented clearly.</p>
      </div>

      <div className="about-content">

        <div className="image-values-container">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                 alt="Our team working" />
          </div>

          <section className="values-section">
            <h2>What We Value</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Simplicity</h3>
                <p>Clean designs without unnecessary clutter</p>
              </div>
              <div className="value-card">
                <h3>Honesty</h3>
                <p>Transparent product information</p>
              </div>
              <div className="value-card">
                <h3>Quality</h3>
                <p>Carefully selected products</p>
              </div>
            </div>
          </section>
        </div>

        <section className="team-section">
          <h2><u>Small Team, Big Passion</u></h2>
          <p>
            We're a dedicated group of 10 people who care deeply about creating 
            a better shopping experience. Every decision we make is focused on 
            serving you better.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;