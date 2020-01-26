import React, { Component } from 'react';


class App extends Component {
      constructor() {
        super()
        this.state = {
          random: 0,
          random2: 0,
          random3: 0,
          random4: 0,
          random5: 0,
        }
        this.handleClick = this.handleClick.bind(this)
      }
        

      handleClick =() => {
          const min = 0;
          const max = 9;
          const random = min + Math.floor(Math.random() * (max-min));
          this.setState ({ random })
          
        
      }
  
      render() {
          return (
              <div className="container">
                  <h1>{this.state.random}</h1>
                  <h1>{this.state.random2}</h1>
                  <h1>{this.state.random3}</h1>
                  <h1>{this.state.random4}</h1>
                  <h1>{this.state.random5}</h1>
                  <button value="Roll!" className="button" onClick={this.handleClick}>Roll!</button>
              </div>
              
          )
      }
  }
      


export default App;
