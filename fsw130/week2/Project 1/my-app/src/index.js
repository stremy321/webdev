import React from 'react';
import ReactDOM from 'react-dom';
import Add from "./components/Add"
import List from "./components/List"
import Footer from "./components/Footer"
import { UglyContextProvider } from "./contexts/ugly"



function App() {
    return (
        <UglyContextProvider>
            <Add />
            <List />
            <Footer />
        </UglyContextProvider>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)