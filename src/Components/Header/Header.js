import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h3>Land <span className='logo-2'>scaping</span> </h3>
            </div>
            <div className='nav-menu'>
                <Link  to="/home">Home</Link>
                <Link  to="/services">Services</Link>
                <Link  to="/about">About Us</Link>
                <Link  to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <Link  to="/login">Login</Link>
               
            </div>
        </div>
    );
};

export default Header;