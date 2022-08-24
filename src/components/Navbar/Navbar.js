import React from 'react';
import './Navbar.scss';
import ArrowDownIcon from '../../images/path_2.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div></div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" for="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="navbar-content container">
          <li className="navbar-item" href="#home">
            <div className="navbar-item-content">SO FUNKTIONIERT'S</div>
          </li>
          <li className="navbar-item" href="#news">
            <div className="navbar-item-content">SONDERANGEBOTE</div>
          </li>
          <li className="navbar-item dropdown-item" href="#contact">
            <div className="navbar-item-content">MEIN BEREICH</div>
            <span>
              <img src={ArrowDownIcon} className="dropdown-icon" alt="" />
            </span>
            <div className="dropdown-content">
              <div className="dropdown-content-item">My published jokes</div>
              <div className="dropdown-content-item">My saved jokes</div>
              <div className="dropdown-content-item">Account information</div>
              <div className="dropdown-content-item">Publish new joke</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
