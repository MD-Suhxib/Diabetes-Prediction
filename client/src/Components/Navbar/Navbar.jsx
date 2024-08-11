import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure your CSS is imported

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="navbar">
            <nav className="nav">
                <button className="nav-toggle" onClick={toggleNav}>
                    <span className="nav-toggle-icon">&#9776;</span>
                </button>
                <ul className={`nav-list ${isNavOpen ? 'nav-list-open' : ''}`}>
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                    <li className="nav-item"><Link to="/Dia" className="nav-link">Predict</Link></li>
                    <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
