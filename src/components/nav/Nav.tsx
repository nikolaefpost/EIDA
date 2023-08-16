import React, { FC } from 'react';
import { menu } from '../../assets/icons';
// import {CardType, CardVariant} from '../../types';
import styles from "./nav.module.scss"



const Nav: FC = () => {
    return (
        <div

            className={styles.content}
        >
            <img src={menu} alt="menu"/>
            <div className={styles.text}>
                <span>Про нас</span>
                <span>Наші проєкти</span>
                <span>Приєднуйтесь до нас</span>
                <span>Зв'яжіться з нами</span>
            </div>
        </div>
    );
};

export default Nav;