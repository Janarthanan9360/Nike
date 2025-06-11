import React from "react";
import nikiLogo from "../../assets/icons/nike.png";
import wishlist from "../../assets/icons/wishlist.png";
import cart from "../../assets/icons/cart.png";
import '@fontsource/roboto/700.css';
import SearchModal from "../modal/searchmodal";
const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <a className="navbar-brand" href="#">
        <img src={nikiLogo} width="50" height="50" alt="Nike Logo" />
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Men</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Women</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">SNKRS</a>
          </li>
        </ul>
      </div>

      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="#">
          <img src={wishlist} width="25" height="25" alt="Wishlist" />
        </a>
        <div>
          <SearchModal />
        </div>
        <a className="navbar-brand" href="#">
          <img src={cart} width="25" height="25" alt="Cart" />
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
