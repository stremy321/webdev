import React from 'react'

import {Link} from 'react-router-dom'

function Navbar(props) {
    return(
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Add">Addition</Link>
            <Link to="/Sub">Subtraction</Link>
            <Link to="/Mul">Multiplication</Link>
            <Link to="/Div">Division</Link>
        </div>
    )
}

export default Navbar