import React from 'react'
import {Link} from 'react-router-dom'


function Navbar(props) {
    return (
        <div className="Navbar">
            <Link to="/Home">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>
    )
}

export default Navbar