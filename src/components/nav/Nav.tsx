import React, { FC } from 'react';
import { menu } from '../../assets/icons';
// import {CardType, CardVariant} from '../../types';
import styles from "./nav.module.scss"
import {navData} from "../../constants";



const Nav: FC = () => {
    return (
        <div

            className={styles.content}
        >
            <img src={menu} alt="menu"/>
            <nav className={styles.text}>
                {navData.map(item=>(
                    <a key={item.href} href={item.href}>{item.title}</a>
                ))}
            </nav>
        </div>
    );
};

export default Nav;