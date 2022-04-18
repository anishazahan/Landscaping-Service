import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h3>Land <span className='logo-2'>scaping</span> </h3>
            </div>
            <div className=' text-primary'>
                <Link className='navLink' to="/home">Home</Link>
                <Link className='navLink' to="/services">Services</Link>
                <Link className='navLink' to="/about">About Us</Link>
                <Link className='navLink' to="/blog">Blog</Link>
                <Link className='navLink' to="/contact">Contact</Link>
               
            </div>
        </div>
    );
};

export default Header;