import React from 'react';
import {Nav, TitleScreen, WithUs, Eco} from '../components';


import styles from "./main.module.scss"
import Feedback from "../components/feedback";

const Main = () => {
    return (
        <div className={styles.main}>
            <Nav/>
            <TitleScreen/>
            <WithUs/>
            <Eco/>
            <Feedback/>
            {/*<div className={styles.nav}>*/}
            {/*    Temp*/}
            {/*</div>*/}
        </div>
    );
};

export default Main;