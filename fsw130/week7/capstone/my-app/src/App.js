import React from "react";

import Home from "./components/Home";
import Cities from "./components/cityPopulations";
import Movies from "./components/movies";
import Richest from "./components/richest";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux"

function App(props) {
  return (
    <main
      style={{
        display: "grid",
        height: "95vh",
        gridTemplateRows: "auto 15vh",
        gridGap: "5vh",
        overflowY: "auto"
      }}>
        {console.log(props)}

        <Switch>
          <Route exact path="/" exact render={() => <Home />} />
          <Route
            exact path = "/movies"
            exact render = {() => <Movies movieArray={props.movies} />}
          />
          <Route
            exact path = "/richest"
            exact render = {() => <Richest richArray={props.richest} />}
          />
          <Route
            exact path = "/cities"
            exact render = {() => <Cities cityArray={props.cities} />}
          />
        </Switch>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    riches: state.riches,
    cities: state.cities
  }
}
export default connect(mapStateToProps)(App)