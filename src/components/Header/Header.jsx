import React from 'react';
import { Link } from 'react-router-dom';
import './Heaader.css'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/review' >Order Review</Link>
            <Link to='/about'>About</Link>
            <Link>Order Checkout</Link>
        </nav>
    );
};

export default Header;