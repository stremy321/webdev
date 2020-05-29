import React from "react"
import Home from "./Home"

import "./../style/lists.css"

class Rich extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            richestArray: this.props.richestArray
        }
    }
    render() {
        return <div>
            <Home />
                <h1 className="mainHeading">Richest:</h1>
                {this.state.richestArray.map((rich, num) => {
                   return(
                    <div className="richest" key={num}> 
                    <h1>Name: {rich.name}</h1>
                    <h1>Networth: {rich.networth}</h1>
                    <h1>Source: {rich.source}</h1>
                    </div>)})
                }
                    {console.log(this.state.richestArray)}
                </div>
    }  
}

export default Rich