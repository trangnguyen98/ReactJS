import React from "react";
import { Link } from "react-router-dom";

import "./header.css";
const Header = () => {
  return (
    <div className="header">
      {/* <div className="header__menu-btn">
          <i className="header__menu-icon ti-menu"></i>
        </div> */}
      <div className="header__navbav">
        <ul className="header__navbav-list item-menu">
          <li className="header__navbav-item menu-btn">
            <i className="header__navbav-menu-icon ti-menu"></i>
          </li>
        </ul>
        <ul className="header__navbav-list list-text-header">
          <li className="header__navbav-item">
            <Link to="/">HOME</Link>
          </li>
          <li className="header__navbav-item">
            <Link to="/shop">SHOP</Link>
          </li>
          <li className="header__navbav-item">
            <Link to="/magazine">MAGAZINE</Link>
          </li>
        </ul>
      </div>
      <div className="header__navbav">
        <ul className="header__navbav-list list-item-header">
          <li className="header__navbav-item">
            <i className="header__navbav-cart-icon ti-shopping-cart"></i>
          </li>
          <li className="header__navbav-item">LOGIN</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
