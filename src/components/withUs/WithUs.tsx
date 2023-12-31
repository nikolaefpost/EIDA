import React, {FC} from 'react';
import building from "../../assets/icons/building.svg"
import {about_us} from "../../assets";
import Cards from "./Cards";
import { play } from '../../assets/icons';

import styles from "../withUs/withUs.module.scss";



const WithUs: FC = () => {
    return (
        <div className={styles.content} id="about">
            <img src={building} alt="building" className={styles.building}/>
            <div className={styles.about_us}>
                <div className={styles.text}>
                <h2>Чому варто бути з нами?</h2>
                <p>Ми - злагоджена команда, що поєднує постачальників будматеріалів зі своїми споживачами та логістикою.
                    Наша ідея полягає у тому, щоб створити універсальний механізм, який дозволить нашим клієнтам
                    забудовувати мрію про свої оселі з легкістю та задоволенням.
                </p>
                </div>
                <div className={styles.image_block}>
                    <div className={styles.border}/>
                    <img src={about_us} alt="about_us" className={styles.pic} />
                    <img src={play} alt="play" className={styles.play} />
                </div>
            </div>
            <Cards/>
        </div>
    );
}

export default WithUs;