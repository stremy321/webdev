import React from 'react';
import ReactDOM from 'react-dom';
import addtvshows from "./addtvshows"
import { TvshowsContextProvider } from "./listContext"
import Addtvshow from './addtvshows';

function App() {
    return (
        <TvshowsContextProvider>
            <Addtvshow />
            <tvshowsList />
        </TvshowsContextProvider>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

