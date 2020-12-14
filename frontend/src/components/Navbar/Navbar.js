import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navBar">
            <div><Link to="/" className="logo">Crafts Ms</Link></div>
            <div className="searchBar">
                <input type="text" placeholder="search ..."/>
            </div>
            <div className="actions">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
            </div>
        </div>
    )
}

export default Navbar
