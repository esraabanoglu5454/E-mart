import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './About.css';

function About() {
  return (
    <div className="container mt-5">
      <div className="about-page text-center">
        <h1>About Us</h1>
        <p>
        Welcome to EA COLLECTION . Since 2010. Choose EA COLLECTION.
        </p>
        <p>
          At EA COLLECTION, we offer a wide range of products, from electronics to fashion, to meet your diverse needs.
          Our commitment to quality ensures that you receive products that not only meet but exceed your expectations.
        </p>
        <div className="icon-container">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <FontAwesomeIcon icon={faHeart} size="2x" />
        </div>
      </div>
    </div>
  );
}

export default About;