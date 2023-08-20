import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navigation from "./routes";

const App: React.FC = () => {

    return (
        <BrowserRouter >
            <Navigation/>
        </BrowserRouter >
    );
}

export default App;