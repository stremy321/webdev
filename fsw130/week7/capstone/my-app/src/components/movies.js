import React from "react"
import Home from "./Home"

import "../styling/population.css"

class Movies extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            moviesArray: this.props.moviesArray
        }
    }
    render() {
        return <div>
            <Home />
                <h1 className="mainHeading">Movies:</h1>
                {this.state.moviesArray.map((movie, num) => {
                   return(
                    <div className="movies" key={num}> 
                    <h1>Year: {movies.year}</h1>
                    <h1>Name: {movies.name}</h1>
                    <h1>Genre: {movies.genre}</h1>
                    </div>)})
                }
                    {console.log(this.state.moviesArray)}
                </div>
    }  
}

export default Movies