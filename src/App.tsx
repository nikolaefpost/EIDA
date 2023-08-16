import React from 'react';
import {HashRouter} from "react-router-dom";
import Navigation from "./routes";

import styles from "./app.module.scss"

const App: React.FC = () => {

    return (
        <HashRouter>
            <Navigation/>
        </HashRouter>
    );
}

export default App;