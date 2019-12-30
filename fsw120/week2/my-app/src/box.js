import React from "react"

function box(props) {
    console.log(props)
    return (
        <div className="fruitbox">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Origin: {props.contact.origin}</p>
            <p>Uses: {props.contact.uses}</p>
        </div>
    )
}

export default box