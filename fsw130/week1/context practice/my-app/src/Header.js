import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Header(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <header className={`${props.theme}-theme`}>
                    <h1>{theme === "light" ? "Light" : "Dark"} Theme</h1>
                </header>
            )}
        </ThemeContext.Consumer>
    );    
}

export default Header;
