import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import  CrownLogo  from '../../assets/crown-logo.svg';
import "./navigation.style.scss"

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} className="logo" alt="" />
          <h3>
            Crown <span>Clothing</span>
          </h3>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            ARTICLES
          </Link>
          <Link className="nav-link" to="/auth">
            S'INSCRIRE
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;