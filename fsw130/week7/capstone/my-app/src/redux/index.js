import movieReducer from "./movies";
import richReducer from "./richest";
import cityReducer from "./cities";

const redux = require("redux")
const { combineReducers, createStore} = redux

const rootReducer = combineReducers({
    movies: movieReducer,
    richest: richReducer,
    cities: cityReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store