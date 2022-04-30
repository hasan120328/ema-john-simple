import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>hello header </h1>
            <img src={logo} alt="" srcset="" />
            <nav>
                <a href="/shop">Shop</a>
            <a href="/order">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;