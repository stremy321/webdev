import React from "react";
import Main from './Main.js'
import Footer from './Footer.js'
import Header from '/Header.js'
import ThemeContext from '/themeContext.js'



class App extends React.Component {
  state = {
    themeChange: "dark"
  };
  render() {
    
    return (
      
      <ThemeContext.Consumer>
        {value => (
          
          <div>
            <Header theme={this.state.themeChange} />
            <Main
              handleClick={() => {
                this.setState(prevState => ({
                  themeChange:
                    prevState.themeChange === "light" ? "dark" : "light"
                }));
              }}
              theme={this.state.themeChange}
            />

            <Footer theme={this.state.themeChange} />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default App;
