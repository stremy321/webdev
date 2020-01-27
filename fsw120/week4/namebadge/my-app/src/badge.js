import React from 'react'
import "./badge.css"

class Form extends React.Component {
    constructor() {
        super() 
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          birthPlace: "",
          phoneNumber: "",
          favFood: "",
          summaryaboutyou: ""
        }
        this.handleChange = this.handleChange.bind(this)
      }
    

        handleChange (e) {
            let change = {}
            change[e.target.name] = e.target.value
            this.setState(change)
        }
    
      onSubmit = (e) => {
        this.props.onSubmit(this.state)
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phoneNumber: "",
            favFood: "",
            summaryaboutyou: ""
        })
      }
      
        submitButton = () => {
          var inputs = document.getElementsByTagName("inputs");
          var textareas = document.getElementsByTagName("textarea");
          var filled = true
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].type === "text" && !inputs[i].value){
                    filled = false
                }
            for (var j = 0; j < textareas.length; j++) {
                if (!textareas[j].value){
                    filled = false
                }
            }
            if (filled) {
                document.getElementsByTagName("button").disabled = false;
            } else {
                document.getElementsByTagName("button").disabled = true
            }
            }
      }

      render() {
        return(
          <main>
            <form className="container">
            
              <input 
                className="input"
                type="text" 
                value={this.state.firstName}
                name="firstName" 
                onChange={this.handleChange}
                required 
                placeholder="First Name"
                />
              
              <input 
                className="input"
                type="text" 
                value={this.state.lastName} 
                name="lastName"
                placeholder="Last Name" 
                required
                onChange={this.handleChange} 
                />
              <br />
              <input 
                className="input"
                type="email" 
                value={this.state.email} 
                name="email"
                placeholder="Email" 
                required
                onChange={this.handleChange} 
                />
              
              <input 
                className="input"
                type="text" 
                value={this.state.birthPlace} 
                name="birthPlace"
                placeholder="Place of Birth" 
                required
                onChange={this.handleChange} />
              <br />
              <input 
                className="input"
                type="tel" 
                value={this.state.phoneNumber} 
                name="phoneNumber"
                placeholder="Phone Ex. 5553211234" 
                minLength="10"
                maxLength="10"
                pattern="[0-9] {10}"
                required
                onChange={this.handleChange} />
              
              <input 
                className="input"
                type="text" 
                value={this.state.favFood} 
                name="favFood"
                placeholder="Favorite Food" 
                required
                onChange={this.handleChange} />
              
              <textarea 
                className="textArea"
                type="text" 
                value={this.state.about} 
                name="about"
                placeholder="Tell us about yourself" 
                minLength="50"
                required
                onChange={this.handleChange}>
            
                </textarea>
            <br />
                <button type="submit" className="button" onClick={e => this.onSubmit(e)}>Submit</button>

            </form>
            
            <div className="resultContainer">
            <h2 className="badge">Badge:</h2>
            <div className="results">
            <p className="result">Name: {this.state.firstName} {this.state.lastName}</p>
            <p className="result">Phone: {this.state.phoneNumber}</p>
            <p className="result">Place of Birth: {this.state.birthPlace}</p>
            <p className="result">Favorite food: {this.state.favFood}</p>
            <p className="result">Email: {this.state.email}</p><br />
            <textarea className="textResult">{this.state.about}</textarea>
            </div>
            </div>
          </main>
        )
      }
    }


export default Form