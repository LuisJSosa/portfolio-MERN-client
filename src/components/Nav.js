import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to ="/"> Home </Link>
            <Link to="/jobLog">CRUD Resume</Link>
            <Link to="/topics">Web Concepts</Link>
            <Link to ="../gallery"> Projects </Link>
            <Link to ="../staff">API</Link>
            <Link to ="../order">Order</Link>
        </nav>

    );
}

export default Nav;
