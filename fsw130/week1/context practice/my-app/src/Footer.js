import React from "react"
import ThemeContext from "./themeContext";

function Footer(props) {
    return (
        <ThemeContext>
            {context => (
                <header className={'${props.context}-context'}>
                <h1>Footer{context === "light"? "Light" : "Dark"}Context</h1>
                  </header>
               
            )}
        </ThemeContext>
    );    
}

export default Footer;
