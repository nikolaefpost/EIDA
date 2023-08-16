import React from 'react';
import { Link } from "react-router-dom";
import {Nav, TitleScreen, WithUs} from '../components';
import {RoutPaths} from "../helpers/constans";

import styles from "./main.module.scss"

const Main = () => {
    return (
        <div className={styles.main}>
            <Nav/>
            <TitleScreen/>
            <WithUs/>
            <div className={styles.nav}>
                Temp
            </div>
        </div>
    );
};

export default Main;