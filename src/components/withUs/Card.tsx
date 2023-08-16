import React, { FC } from 'react';
import {CardType} from "../../types";

import styles from "../withUs/withUs.module.scss";

const Card: FC<CardType> = ({title, content, icon}) => {
    return (
        <div className={styles.card}>
            <div className={styles.title_block}>
                <div className={styles.img}><img src={icon} alt="icon"/></div>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default Card;