import React from "react"

function box(props) {
    console.log(props)
    return (
        <div className="fruitbox">
           
            <h3>Fruits: {props.contact.name}</h3>
            <p>Origin: {props.box.origin}</p>
            <p>Uses: {props.box.uses}</p>
        </div>
    )
}

export default box