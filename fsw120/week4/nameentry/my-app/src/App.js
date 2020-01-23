import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    listName = () => {
      document.getElementByClassName("add").onclick = function() {
        var text = document.getElementByClassName("input").value
        let li = "<li>" + text + "</li>"
        document.getElementById("list").appendChild(li)
      }


    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                
                 
                />
                <h1>{this.state.firstName}</h1>
                <button type="button" className="add" onSubmit="listName()">Add Name</button>
            </form>
        )
    }
}

export default App
