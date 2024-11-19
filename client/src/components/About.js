import React from 'react';
import './about.css';

const About = () => {
  return (
    <section className="about-container" aria-labelledby="about-heading">
      <header className="about-header">
        <h1 id="about-heading">About Our Store</h1>
        <img src="https://www.mrporter.com/content/images/cms/ycm/resource/blob/25075922/32ad542add450117453db9b4b6163fba/w1500-q80-1-data.jpg/w1500_q80.jpg" alt="Men's Fashion Banner" className="about-banner" />
      </header>
      <article className="about-content">
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At Men’s Elegance, we bring you high-quality, timeless styles that make you feel your best, no matter the occasion.
          </p>
          <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb" alt="Crafted Clothing" className="about-image" />
        </section>
        <section className="about-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2023, we started with a passion for quality and craftsmanship in men’s fashion. From our beginnings in a small workshop to an online store, we have grown by staying true to our commitment to excellence.
          </p>
          <img src="https://images.unsplash.com/photo-1521747116042-5a810fda9664" alt="Our Workshop" className="about-image" />
        </section>
        <section className="about-testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonial">
            <img src="https://www.mrporter.com/variants/images/1647597354156406/ou/w2000_q60.jpg" alt="Customer" className="testimonial-img" />
            <blockquote>“The fit and quality are unmatched. I’ve never felt better in a suit!”</blockquote>
          </div>
          <div className="testimonial">
            <img src="https://images.unsplash.com/photo-1522444195799-478538b28823" alt="Customer" className="testimonial-img" />
            <blockquote>“Exceptional customer service and attention to detail. My new favorite store!”</blockquote>
          </div>
        </section>
      </article>
      <footer className="about-footer">
        <p>Follow us on social media:</p>
        <ul className="social-links">
         
          <li><a href="https://www.instagram.com/your-store" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.facebook.com/your-store" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        </ul>
        <p>Contact us at <a href="mailto:support@mens-style.com">support@mens-elegance.com</a></p>
      </footer>
    </section>
  );
};

export default About;
