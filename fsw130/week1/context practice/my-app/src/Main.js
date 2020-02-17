import React from "react";
import Proptypes from "prop-types";
import ThemeContextConsumer from "./themeContext"

function Button(props) {
    return(
        <botton onClick={props.handleClick} className={'${props.theme}-theme'}>
            Switch Theme
        </botton>
    );
}
        
