import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar({ user, handleLogout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand" to="/">EA COLLECTION</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Products">Products</NavLink>
            <NavLink className="nav-link" to="/About">About</NavLink>
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </ul>
          <ul className="navbar-nav ms-auto"> 
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="visually-hidden">Sepetim</span>
              </NavLink>
            </li>

            
            {
              user ?
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Fav">Favorites</NavLink>
                  </li>
                  <li className="nav-item">
                    <button className='nav-link' onClick={handleLogout}>Logout</button>
                  </li>
                </>
                :
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Login">Login</NavLink>
                </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;