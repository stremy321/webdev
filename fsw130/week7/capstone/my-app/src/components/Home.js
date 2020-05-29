import React from "react"
import { Link } from "react-router-dom"
import "./..style/lists.css"

function Home() {
    return (
        <div className="home">
            <Link to="/movies">Top 5 Movies</Link>
            <Link to="/richest">Top 5 Richest People in the World</Link>
            <Link to="/cities">Top 5 Cities in Florida</Link>
            <h3>Welcome! Please Select a list to view!</h3>
        </div>
    )
}

export default Home