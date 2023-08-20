import React, {FC} from 'react';
import {menu} from "../../../assets";
import {navData} from "../../../constants";

import styles from "../nav.module.scss";

const NavDesktop: FC = () => {
    return (
        <div
            className={styles.content}
        >
            <img src={menu} alt="menu"/>
            <nav className={styles.text}>
                {navData.map(item => (
                    <a key={item.href} href={item.href}>{item.title}</a>
                ))}
            </nav>
        </div>
    );
};

export default NavDesktop;