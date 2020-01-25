import React, { Component } from 'react'


class Blocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        color: ["white", "white", "white", "white"]
    }}
    render() {
        return(
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
        }
}




export default Blocks