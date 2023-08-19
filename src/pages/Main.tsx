import React from 'react';
import {Nav, TitleScreen, WithUs, Eco, QuestionsContacts, Feedback, Footer} from '../components';


import styles from "./main.module.scss"

const Main = () => {
    return (
        <div className={styles.main}>
            <Nav/>
            <TitleScreen/>
            <WithUs/>
            <Eco/>
            <Feedback/>
            <QuestionsContacts/>
           <Footer/>
        </div>
    );
};

export default Main;