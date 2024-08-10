// src/NavBar.js
import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  
    return (
        <header className="navbar">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/Dia" className="nav-link">Predict</Link></li>
                    {/* <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
