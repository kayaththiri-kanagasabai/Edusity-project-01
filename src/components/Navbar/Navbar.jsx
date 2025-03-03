import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
const navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li> Home</li>
        <li> Program</li>
        <li> About us</li>
        <li> Cambus</li>
        <li> Testimonals</li>
        <li>
          <button className="btn">Contact us</button>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default navbar
